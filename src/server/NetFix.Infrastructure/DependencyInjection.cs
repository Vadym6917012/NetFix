using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using NetFix.Application.Interfaces;
using NetFix.Infrastructure.Data;
using NetFix.Infrastructure.Repositories;
using NetFix.Infrastructure.Services;
using System;

namespace NetFix.Infrastructure
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(
           this IServiceCollection services,
           IConfiguration configuration)
        {
            var databaseUrl = Environment.GetEnvironmentVariable("DATABASE_URL");

            string connectionString;

            if ( !string.IsNullOrEmpty(databaseUrl) )
            {
                var uri = new Uri(databaseUrl);
                var userInfo = uri.UserInfo.Split(':');

                connectionString =
            $"Host={uri.Host};" +
            $"Port={uri.Port};" +
            $"Database={uri.AbsolutePath.TrimStart('/')};" +
            $"Username={userInfo [0]};" +
            $"Password={userInfo [1]};" +
            $"SSL Mode=Require;Trust Server Certificate=true";
            }
            else
            {
                connectionString = configuration.GetConnectionString("DefaultConnection") ??
                                   throw new InvalidOperationException("Connection string 'DefaultConnection' not found.");
            }

            services.AddDbContext<DataContext>(option =>
            {
                option.UseNpgsql(connectionString);
            });

            // Repository
            services.AddScoped<IApplicationFormRepository, ApplicationFormRepository>();

            // Services
            services.AddScoped<ITelegramService, TelegramService>();

            return services;
        }
    }
}
