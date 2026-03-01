using AutoMapper;
using MediatR;
using NetFix.Application.Common;
using NetFix.Application.Features.Applications.DTOs;
using NetFix.Application.Interfaces;
using NetFix.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NetFix.Application.Features.Applications.Queries.GetAllApplications
{
    public class GetAllApplicationsQueryHandler
        : IRequestHandler<GetAllApplicationsQuery, Result<PagedResult<ApplicationResponse>>>
    {
        private readonly IApplicationRepository _repository;
        private readonly IMapper _mapper;

        public GetAllApplicationsQueryHandler(IApplicationRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<Result<PagedResult<ApplicationResponse>>> Handle(
            GetAllApplicationsQuery request,
            CancellationToken cancellationToken)
        {
            var countResult = await _repository.GetTotalCountAsync(cancellationToken);
            if ( !countResult.IsSuccess )
                return Result<PagedResult<ApplicationResponse>>.Failure(countResult.Error!);

            var itemsResult = await _repository.GetAllAsync(request.Page, request.PageSize, cancellationToken);
            if ( !itemsResult.IsSuccess )
                return Result<PagedResult<ApplicationResponse>>.Failure(itemsResult.Error!);

            var mapped = _mapper.Map<List<ApplicationResponse>>(itemsResult.Value);

            var paged = new PagedResult<ApplicationResponse>(
                mapped,
                countResult.Value,
                request.Page,
                request.PageSize
            );

            return Result<PagedResult<ApplicationResponse>>.Success(paged);
        }
    }
}
