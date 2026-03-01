using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using NetFix.Application.Interfaces;
using NetFix.Infrastructure.Data;
using NetFix.Infrastructure.Repositories;

namespace NetFix.Infrastructure
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(
           this IServiceCollection services,
           IConfiguration configuration)
        {
            var connectionString = configuration.GetConnectionString("DefaultConnection");

            services.AddDbContext<DataContext>(option =>
            {
                option.UseSqlServer(connectionString);
            });

            // Repository
            services.AddScoped<IApplicationRepository, ApplicationRepository>();

            return services;
        }
    }
}
