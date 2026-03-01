using NetFix.Application.Interfaces;
using NetFix.Domain.Entities;
using NetFix.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NetFix.Infrastructure.Repositories
{
    public class ApplicationRepository : IApplicationRepository
    {
        private readonly DataContext _context;

        public ApplicationRepository(DataContext context)
        {
            _context = context;
        }

        public async Task AddAsync(ApplicationForm application)
        {
            _context.ApplicationForms.Add(application);
            await _context.SaveChangesAsync();
        }

        public async Task<ApplicationForm?> GetByIdAsync(Guid id)
        {
            return await _context.ApplicationForms.FindAsync(id);
        }
    }
}
