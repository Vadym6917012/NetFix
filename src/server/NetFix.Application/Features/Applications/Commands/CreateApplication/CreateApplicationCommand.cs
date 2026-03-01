using MediatR;
using NetFix.Application.Features.Applications.DTOs;
using NetFix.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace NetFix.Application.Features.Applications.Commands.CreateApplication
{
    public record CreateApplicationCommand(
        string FullName,
        string Email,
        string Phone,
        string Message
        ) : IRequest<Result<ApplicationResponse>>;
}
