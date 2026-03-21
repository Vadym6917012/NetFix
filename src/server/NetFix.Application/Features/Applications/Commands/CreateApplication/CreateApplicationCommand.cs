using MediatR;
using NetFix.Application.Features.Applications.DTOs;
using NetFix.Domain.Common;

namespace NetFix.Application.Features.Applications.Commands.CreateApplication
{
    public record CreateApplicationCommand(
        string FullName,
        string Email,
        string Phone,
        string Service,
        string Message
        ) : IRequest<Result<ApplicationResponse>>;
}
