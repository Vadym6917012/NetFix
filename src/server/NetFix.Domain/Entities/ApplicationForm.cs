namespace NetFix.Domain.Entities
{
    public class ApplicationForm
    {
        public Guid Id { get; private set; }
        public string FullName { get; private set; }
        public string Email { get; private set; }
        public string Phone { get; private set; }
        public string Message { get; private set; }
        public DateTime SubmittedAt { get; private set; }

        private ApplicationForm() { }

        public ApplicationForm(string fullName, string email, string phone, string message)
        {
            Id = Guid.NewGuid();
            FullName = fullName;
            Email = email;
            Phone = phone;
            Message = message;
            SubmittedAt = DateTime.UtcNow;
        }
    }
}
