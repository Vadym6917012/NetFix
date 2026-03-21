namespace NetFix.Application.Features.Applications.DTOs
{
    public class CreateApplicationRequest
    {
        public string FullName { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Phone { get; set; } = null!;
        public string Service { get; set; } = null!;
        public string Message { get; set; } = null!;
    }
}
