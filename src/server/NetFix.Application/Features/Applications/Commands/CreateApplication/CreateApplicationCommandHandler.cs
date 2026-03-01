using AutoMapper;
using MediatR;
using NetFix.Application.Features.Applications.DTOs;
using NetFix.Application.Interfaces;
using NetFix.Domain.Entities;

namespace NetFix.Application.Features.Applications.Commands.CreateApplication
{
    public class CreateApplicationCommandHandler
    : IRequestHandler<CreateApplicationCommand, ApplicationResponse>
    {
        private readonly IApplicationRepository _repository;
        private readonly IMapper _mapper;

        public CreateApplicationCommandHandler(IApplicationRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<ApplicationResponse> Handle(CreateApplicationCommand request, CancellationToken cancellationToken)
        {
            var entity = new ApplicationForm(
                request.Request.FullName,
                request.Request.Email,
                request.Request.Phone,
                request.Request.Message
            );

            await _repository.AddAsync(entity);

            return _mapper.Map<ApplicationResponse>(entity);
        }
    }
}
