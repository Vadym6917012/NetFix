namespace NetFix.Domain.Entities
{
    public class ApplicationForm
    {
        public Guid Id { get; private set; }
        public string FullName { get; private set; }
        public string Email { get; private set; }
        public string Phone { get; private set; }
        public string Service { get; private set; }
        public string? Message { get; private set; }
        public DateTime SubmittedAt { get; private set; }

        private ApplicationForm() { }

        public ApplicationForm(
            string fullName,
            string email,
            string phone,
            string service,
            string? message = null)
        {
            if ( string.IsNullOrWhiteSpace(fullName) )
                throw new ArgumentException("FullName is required.", nameof(fullName));
            if ( string.IsNullOrWhiteSpace(phone) )
                throw new ArgumentException("Phone is required.", nameof(phone));
            if ( string.IsNullOrWhiteSpace(service) )
                throw new ArgumentException("Service is required.", nameof(service));

            Id = Guid.NewGuid();
            FullName = fullName.Trim();
            Email = email?.Trim() ?? string.Empty;
            Phone = phone.Trim();
            Service = service.Trim();
            Message = message?.Trim();
            SubmittedAt = DateTime.UtcNow;
        }
    }
}
