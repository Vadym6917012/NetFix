using MediatR;
using NetFix.Application.Common;
using NetFix.Application.Features.Applications.DTOs;
using NetFix.Domain.Common;

namespace NetFix.Application.Features.Applications.Queries.GetAllApplications
{
    public record GetAllApplicationsQuery(int Page = 1, int PageSize = 10)
        : IRequest<Result<PagedResult<ApplicationResponse>>>;
}
