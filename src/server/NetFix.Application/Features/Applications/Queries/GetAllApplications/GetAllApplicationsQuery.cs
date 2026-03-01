using MediatR;
using NetFix.Application.Common;
using NetFix.Application.Features.Applications.DTOs;
using NetFix.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NetFix.Application.Features.Applications.Queries.GetAllApplications
{
    public record GetAllApplicationsQuery(int Page = 1, int PageSize = 10)
        : IRequest<Result<PagedResult<ApplicationResponse>>>;
}
