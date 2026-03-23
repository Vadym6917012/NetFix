using Microsoft.EntityFrameworkCore;
using NetFix.Domain.Entities;

namespace NetFix.Infrastructure.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<ApplicationForm> ApplicationForms { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ApplicationForm>(e =>
            {
                e.Property(x => x.FullName).HasMaxLength(150).IsRequired();
                e.Property(x => x.Phone).HasMaxLength(20).IsRequired();
                e.Property(x => x.Email).HasMaxLength(254);
                e.Property(x => x.Service).HasMaxLength(100).IsRequired();
                e.Property(x => x.Message).HasMaxLength(2000);
            });
        }
    }
}
