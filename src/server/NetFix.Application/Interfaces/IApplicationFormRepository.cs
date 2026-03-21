using NetFix.Domain.Common;
using NetFix.Domain.Entities;

namespace NetFix.Application.Interfaces
{
    public interface IApplicationFormRepository
    {
        Task<Result<ApplicationForm>> AddAsync(ApplicationForm application, CancellationToken cancellationToken = default);
        Task<Result<ApplicationForm>> GetByIdAsync(Guid id, CancellationToken cancellationToken = default);
        Task<Result<IReadOnlyList<ApplicationForm>>> GetAllAsync(int page, int pageSize, CancellationToken cancellationToken = default);
        Task<Result<int>> GetTotalCountAsync(CancellationToken cancellationToken = default);
    }
}
