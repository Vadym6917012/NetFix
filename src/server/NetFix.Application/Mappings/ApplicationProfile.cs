using AutoMapper;
using NetFix.Application.Features.Applications.DTOs;
using NetFix.Domain.Entities;

namespace NetFix.Application.Mappings
{
    public class ApplicationProfile : Profile
    {
        public ApplicationProfile()
        {
            CreateMap<ApplicationForm, ApplicationResponse>();
        }
    }
}
