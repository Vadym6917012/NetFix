using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NetFix.Domain.Entities
{
    public class ApplicationForm
    {
        public Guid Id { get; private set; } = Guid.NewGuid();
        public string? FullName { get; private set; } = null!;
        public string? Email { get; private set; } = null!;
        public string? Phone { get; private set; } = null!;
        public string? Message { get; private set; } = null!;
        public DateTime SubmittedAt { get; private set; } = DateTime.UtcNow;

        public ApplicationForm(string fullName, string email, string phone, string message)
        {
            FullName = fullName;
            Email = email;
            Phone = phone;
            Message = message;
        }
    }
}
