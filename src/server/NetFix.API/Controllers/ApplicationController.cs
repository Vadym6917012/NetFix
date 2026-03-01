using MediatR;
using Microsoft.AspNetCore.Mvc;
using NetFix.Application.Features.Applications.Commands.CreateApplication;
using NetFix.Application.Features.Applications.DTOs;

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
        public async Task<ActionResult<ApplicationResponse>> Create([FromBody] CreateApplicationRequest request)
        {
            var command = new CreateApplicationCommand(request);
            var result = await _mediator.Send(command);
            return CreatedAtAction(nameof(GetById), new { id = result.Id }, result);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ApplicationResponse>> GetById(Guid id)
        {
            return Ok(); // stub
        }
    }
}
