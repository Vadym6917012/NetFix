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
        private readonly IApplicationFormRepository _repository;
        private readonly ITelegramService _telegramService;
        private readonly IMapper _mapper;

        public CreateApplicationCommandHandler(
            IApplicationFormRepository repository,
            IMapper mapper,
            ITelegramService telegramService)
        {
            _repository = repository;
            _mapper = mapper;
            _telegramService = telegramService;
        }

        public async Task<Result<ApplicationResponse>> Handle(
            CreateApplicationCommand request,
            CancellationToken cancellationToken)
        {
            var entity = new ApplicationForm(
                request.FullName,
                request.Email,
                request.Phone,
                request.Service,
                request.Message
            );

            var result = await _repository.AddAsync(entity, cancellationToken);

            if ( !result.IsSuccess )
                return Result<ApplicationResponse>.Failure(result.Error!);

            var text = $@"
📩 Нова заявка! {entity.SubmittedAt:dd.MM.yyyy HH:mm}

👤 Ім'я: {entity.FullName}
📧 Email: {entity.Email}
📞 Телефон: {entity.Phone}
🛠 Послуга: {entity.Service}
💬 Повідомлення: {entity.Message}
";

            await _telegramService.SendMessageAsync(text);

            return Result<ApplicationResponse>.Success(_mapper.Map<ApplicationResponse>(entity));
        }
    }
}
