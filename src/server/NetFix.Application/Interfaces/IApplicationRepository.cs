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
        Task AddAsync(ApplicationForm application);
        Task<ApplicationForm> GetByIdAsync(Guid id);
    }
}
