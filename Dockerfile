FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base
WORKDIR /app
EXPOSE 8080

FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src
COPY ["src/server/NetFix.API/NetFix.API.csproj", "src/server/NetFix.API/"]
COPY ["src/server/NetFix.Application/NetFix.Application.csproj", "src/server/NetFix.Application/"]
COPY ["src/server/NetFix.Infrastructure/NetFix.Infrastructure.csproj", "src/server/NetFix.Infrastructure/"]
COPY ["src/server/NetFix.Domain/NetFix.Domain.csproj", "src/server/NetFix.Domain/"]
RUN dotnet restore "src/server/NetFix.API/NetFix.API.csproj"
COPY . .
RUN dotnet publish "src/server/NetFix.API/NetFix.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "NetFix.API.dll"]