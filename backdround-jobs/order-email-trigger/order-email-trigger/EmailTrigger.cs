using Azure.Communication.Email;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;

namespace order_email_trigger
{
    public class EmailTrigger
    {
        private readonly ILogger _logger;
        private static HttpClient httpClient = new HttpClient();

        public EmailTrigger(ILoggerFactory loggerFactory)
        {
            _logger = loggerFactory.CreateLogger<EmailTrigger>();
        }

        public async Task<string> GenerateEmailContent(string orderId)
        {
            var api = Environment.GetEnvironmentVariable("ORDER_EMAIL_TEMPLATE_API") + "/" + orderId;
            using (var response = await httpClient.GetAsync(new Uri(api)))
            {
                return await response.Content.ReadAsStringAsync();
            }
        }

        public async Task SendEmail(OrderModel order)
        {
            var connection = Environment.GetEnvironmentVariable("AZURE_COMMUNICATION_CONNECTION");
            var senderEmail = Environment.GetEnvironmentVariable("AZURE_COMMUNICATION_SENDER_EMAIL");

            EmailClient emailClient = new EmailClient(connection);

            var subject = "Thank you for placing the order!";
            var htmlContent = await GenerateEmailContent(order.OrderId);

            EmailSendOperation emailSendOperation = await emailClient.SendAsync(
                                                            Azure.WaitUntil.Completed,
                                                            senderEmail,
                                                            order.Recipient,
                                                            subject,
                                                            htmlContent);

            _logger.LogInformation($"Email Status: {emailSendOperation.Value.Status}");
        }

        [Function("EmailTrigger")]
        public async Task Run([ServiceBusTrigger("order", Connection = "connectionstring")] QueueItem queueItem)
        {
            await SendEmail(queueItem.data);
            _logger.LogInformation($"C# ServiceBus queue trigger function processed message: {queueItem.data.OrderId}");
        }
    }

    public class OrderModel
    {
        public string OrderId { get; set; }
        public string Recipient { get; set; }
    }

    public class QueueItem
    {
        public OrderModel data { get; set; }
        public string datacontenttype { get; set; }
        public string id { get; set; }
        public string pubsubname { get; set; }
        public string source { get; set; }
        public string specversion { get; set; }
        public string time { get; set; }
        public string topic { get; set; }
        public string traceid { get; set; }
        public string traceparent { get; set; }
        public string tracestate { get; set; }
        public string type { get; set; }
    }

}
