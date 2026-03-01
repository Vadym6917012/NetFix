using AutoMapper;
using MediatR;
using NetFix.Application.Features.Applications.DTOs;
using NetFix.Application.Interfaces;
using NetFix.Domain.Common;
using NetFix.Domain.Entities;

namespace NetFix.Application.Features.Applications.Commands.CreateApplication
{
    public class CreateApplicationCommandHandler
        : IRequestHandler<CreateApplicationCommand, Result<ApplicationResponse>>
    {
        private readonly IApplicationRepository _repository;
        private readonly IMapper _mapper;

        public CreateApplicationCommandHandler(IApplicationRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<Result<ApplicationResponse>> Handle(
            CreateApplicationCommand request,
            CancellationToken cancellationToken)
        {
            var entity = new ApplicationForm(
                request.FullName,
                request.Email,
                request.Phone,
                request.Message
            );

            var result = await _repository.AddAsync(entity, cancellationToken);

            if ( !result.IsSuccess )
                return Result<ApplicationResponse>.Failure(result.Error!);

            return Result<ApplicationResponse>.Success(_mapper.Map<ApplicationResponse>(entity));
        }
    }
}
