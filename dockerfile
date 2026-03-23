FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base
WORKDIR /app
EXPOSE 8080

FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src
COPY ["NetFix.API/NetFix.API.csproj", "NetFix.API/"]
COPY ["NetFix.Application/NetFix.Application.csproj", "NetFix.Application/"]
COPY ["NetFix.Infrastructure/NetFix.Infrastructure.csproj", "NetFix.Infrastructure/"]
COPY ["NetFix.Domain/NetFix.Domain.csproj", "NetFix.Domain/"]
RUN dotnet restore "NetFix.API/NetFix.API.csproj"
COPY . .
RUN dotnet publish "NetFix.API/NetFix.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "NetFix.API.dll"]