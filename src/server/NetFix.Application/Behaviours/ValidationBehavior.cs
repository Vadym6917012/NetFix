using FluentValidation;
using MediatR;
using NetFix.Domain.Common;

namespace NetFix.Application.Behaviours
{
    public class ValidationBehavior<TRequest, TResponse> : IPipelineBehavior<TRequest, TResponse>
        where TRequest : IRequest<TResponse>
    {
        private readonly IEnumerable<IValidator<TRequest>> _validators;

        public ValidationBehavior(IEnumerable<IValidator<TRequest>> validators)
        {
            _validators = validators;
        }

        public async Task<TResponse> Handle(
            TRequest request,
            RequestHandlerDelegate<TResponse> next,
            CancellationToken cancellationToken)
        {
            if ( !_validators.Any() )
                return await next();

            var context = new ValidationContext<TRequest>(request);

            var failures = _validators
                .Select(v => v.Validate(context))
                .SelectMany(r => r.Errors)
                .Where(f => f != null)
                .ToList();

            if ( failures.Count != 0 )
            {
                var errors = string.Join("; ", failures.Select(f => f.ErrorMessage));

                // If TResponse is Result<T>, return Failure — otherwise throw
                var responseType = typeof(TResponse);
                if ( responseType.IsGenericType && responseType.GetGenericTypeDefinition() == typeof(Result<>) )
                {
                    var failureMethod = responseType.GetMethod("Failure")!;
                    return (TResponse)failureMethod.Invoke(null, new object [] { errors })!;
                }

                throw new ValidationException(failures);
            }

            return await next();
        }
    }
}
