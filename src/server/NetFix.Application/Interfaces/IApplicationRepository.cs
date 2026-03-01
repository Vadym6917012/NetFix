using NetFix.Domain.Common;
using NetFix.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NetFix.Application.Interfaces
{
    public interface IApplicationRepository
    {
        Task<Result<ApplicationForm>> AddAsync(ApplicationForm application, CancellationToken cancellationToken = default);
        Task<Result<ApplicationForm>> GetByIdAsync(Guid id, CancellationToken cancellationToken = default);
        Task<Result<IReadOnlyList<ApplicationForm>>> GetAllAsync(int page, int pageSize, CancellationToken cancellationToken = default);
        Task<Result<int>> GetTotalCountAsync(CancellationToken cancellationToken = default);
    }
}
