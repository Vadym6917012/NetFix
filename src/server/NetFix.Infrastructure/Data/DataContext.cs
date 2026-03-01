using Microsoft.EntityFrameworkCore;
using NetFix.Domain.Entities;

namespace NetFix.Infrastructure.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<ApplicationForm> ApplicationForms { get; set; } = null!;
    }
}
