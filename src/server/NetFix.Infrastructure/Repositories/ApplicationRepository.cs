using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using NetFix.Application.Interfaces;
using NetFix.Domain.Common;
using NetFix.Domain.Entities;
using NetFix.Infrastructure.Data;
namespace NetFix.Infrastructure.Repositories
{
    public class ApplicationRepository : IApplicationRepository
    {
        private readonly DataContext _context;
        private readonly ILogger<ApplicationRepository> _logger;

        public ApplicationRepository(DataContext context, ILogger<ApplicationRepository> logger)
        {
            _context = context;
            _logger = logger;
        }

        public async Task<Result<ApplicationForm>> AddAsync(
            ApplicationForm application,
            CancellationToken cancellationToken = default)
        {
            try
            {
                _context.ApplicationForms.Add(application);
                await _context.SaveChangesAsync(cancellationToken);
                return Result<ApplicationForm>.Success(application);
            }
            catch ( DbUpdateException ex )
            {
                _logger.LogError(ex, "Failed to save ApplicationForm with Id {Id}", application.Id);
                return Result<ApplicationForm>.Failure("Failed to save the application. Please try again.");
            }
        }

        public async Task<Result<ApplicationForm>> GetByIdAsync(
           Guid id,
           CancellationToken cancellationToken = default)
        {
            try
            {
                var entity = await _context.ApplicationForms
                    .AsNoTracking()
                    .FirstOrDefaultAsync(x => x.Id == id, cancellationToken);

                return entity is not null
                    ? Result<ApplicationForm>.Success(entity)
                    : Result<ApplicationForm>.Failure($"Application with Id '{id}' was not found.");
            }
            catch ( Exception ex )
            {
                _logger.LogError(ex, "Failed to retrieve ApplicationForm with Id {Id}", id);
                return Result<ApplicationForm>.Failure("Failed to retrieve the application.");
            }
        }

        public async Task<Result<IReadOnlyList<ApplicationForm>>> GetAllAsync(
            int page,
            int pageSize,
            CancellationToken cancellationToken = default)
        {
            try
            {
                var items = await _context.ApplicationForms
                    .AsNoTracking()
                    .OrderByDescending(x => x.SubmittedAt)
                    .Skip((page - 1) * pageSize)
                    .Take(pageSize)
                    .ToListAsync(cancellationToken);

                return Result<IReadOnlyList<ApplicationForm>>.Success(items);
            }
            catch ( Exception ex )
            {
                _logger.LogError(ex, "Failed to retrieve ApplicationForms (page {Page}, size {PageSize})", page, pageSize);
                return Result<IReadOnlyList<ApplicationForm>>.Failure("Failed to retrieve applications.");
            }
        }

        public async Task<Result<int>> GetTotalCountAsync(CancellationToken cancellationToken = default)
        {
            try
            {
                var count = await _context.ApplicationForms.CountAsync(cancellationToken);
                return Result<int>.Success(count);
            }
            catch ( Exception ex )
            {
                _logger.LogError(ex, "Failed to count ApplicationForms");
                return Result<int>.Failure("Failed to retrieve total count.");
            }
        }
    }
}
