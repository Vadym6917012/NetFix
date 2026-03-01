using MediatR;
using NetFix.Application.Features.Applications.DTOs;
using NetFix.Domain.Common;

namespace NetFix.Application.Features.Applications.Queries.GetApplicationById
{
    public record GetApplicationByIdQuery(Guid Id) : IRequest<Result<ApplicationResponse>>;
}
