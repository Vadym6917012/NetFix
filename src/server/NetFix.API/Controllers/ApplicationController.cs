using MediatR;
using Microsoft.AspNetCore.Mvc;
using NetFix.Application.Features.Applications.Commands.CreateApplication;
using NetFix.Application.Features.Applications.DTOs;
using NetFix.Application.Features.Applications.Queries.GetAllApplications;
using NetFix.Application.Features.Applications.Queries.GetApplicationById;

namespace NetFix.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicationController : ControllerBase
    {
        private readonly IMediator _mediator;

        public ApplicationController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateApplicationRequest request)
        {
            var command = new CreateApplicationCommand(
                request.FullName,
                request.Email,
                request.Phone,
                request.Service,
                request.Message
            );

            var result = await _mediator.Send(command);

            return result.IsSuccess
                ? Ok(result.Value)
                : BadRequest(new { error = result.Error });
        }

        // GET api/applications/{id}
        [HttpGet("{id:guid}")]
        public async Task<IActionResult> GetById(Guid id)
        {
            var result = await _mediator.Send(new GetApplicationByIdQuery(id));

            return result.IsSuccess
                ? Ok(result.Value)
                : NotFound(new { error = result.Error });
        }

        // GET api/applications?page=1&pageSize=10
        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] int page = 1, [FromQuery] int pageSize = 10)
        {
            var result = await _mediator.Send(new GetAllApplicationsQuery(page, pageSize));

            return result.IsSuccess
                ? Ok(result.Value)
                : BadRequest(new { error = result.Error });
        }
    }
}
