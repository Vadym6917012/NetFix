using AutoMapper;
using MediatR;
using NetFix.Application.Features.Applications.DTOs;
using NetFix.Application.Interfaces;
using NetFix.Domain.Common;

namespace NetFix.Application.Features.Applications.Queries.GetApplicationById
{
    public class GetApplicationByIdQueryHandler
        : IRequestHandler<GetApplicationByIdQuery, Result<ApplicationResponse>>
    {
        private readonly IApplicationFormRepository _repository;
        private readonly IMapper _mapper;

        public GetApplicationByIdQueryHandler(IApplicationFormRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<Result<ApplicationResponse>> Handle(
            GetApplicationByIdQuery request,
            CancellationToken cancellationToken)
        {
            var result = await _repository.GetByIdAsync(request.Id, cancellationToken);

            if ( !result.IsSuccess )
                return Result<ApplicationResponse>.Failure(result.Error!);

            return Result<ApplicationResponse>.Success(_mapper.Map<ApplicationResponse>(result.Value));
        }
    }
}
