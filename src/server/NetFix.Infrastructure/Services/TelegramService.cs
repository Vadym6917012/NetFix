using Microsoft.Extensions.Configuration;
using NetFix.Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NetFix.Infrastructure.Services
{
    public class TelegramService : ITelegramService
    {
        private readonly string _token;
        private readonly string _chatId;

        public TelegramService(IConfiguration configuration)
        {
            _token = Environment.GetEnvironmentVariable("TELEGRAM_BOT_TOKEN");
            _chatId = Environment.GetEnvironmentVariable("TELEGRAM_CHAT_ID");
        }

        public async Task SendMessageAsync(string message)
        {
            var url = $"https://api.telegram.org/bot{_token}/sendMessage";

            using var client = new HttpClient();

            var content = new StringContent(
            $"chat_id={_chatId}&text={message}",
            Encoding.UTF8,
            "application/x-www-form-urlencoded");

            await client.PostAsync(url, content);
        }
    }
}
