using MediatR;
using NetFix.Application.Features.Applications.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace NetFix.Application.Features.Applications.Commands.CreateApplication
{
    public class CreateApplicationCommand : IRequest<ApplicationResponse>
    {
        public CreateApplicationRequest Request { get; }

        public CreateApplicationCommand(CreateApplicationRequest request)
        {
            Request = request;
        }
    }
}
