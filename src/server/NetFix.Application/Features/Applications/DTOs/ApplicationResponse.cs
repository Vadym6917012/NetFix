namespace NetFix.Application.Features.Applications.DTOs
{
    public class ApplicationResponse
    {
        public Guid Id { get; set; }
        public string FullName { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Service { get; set; } = null!;
        public DateTime SubmittedAt { get; set; }
        public string Phone { get; set; } = null!;
        public string? Message { get; set; }
    }
}
