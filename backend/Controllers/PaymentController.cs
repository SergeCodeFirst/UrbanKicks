using System;
using Microsoft.AspNetCore.Mvc;
using backend.Services.PaymentService;
using backend.Dtos.Product;
using Newtonsoft.Json;
using Stripe;
using Stripe.Checkout;

namespace backend.Controllers
{
	[ApiController]
	[Route("[Controller]")]
	public class PaymentController : ControllerBase
	{
		private readonly IPaymentService _paymentService;

		public PaymentController(IPaymentService paymentService)
		{
			_paymentService = paymentService;
        }

		[HttpPost("/testcheckout")]
        public async Task<ActionResult> testcheckout([FromBody] List<CheckoutPtoductDto> items)
		{
			var res = await _paymentService.pay();

			try
			{
                StripeConfiguration.ApiKey = "sk_test_51O9bDBHgdnCMr3IWAL8EnR5R0AwTd3intcpN6Flc4PVUxBQKwBVGCzOHU0IAKjMXYiEKPDXD3rGVj24KqSxLxGnn00tXc5vZcQ";

                var listItems = items.Select(item => new SessionLineItemOptions
                {
                    PriceData = new SessionLineItemPriceDataOptions
                    {
                        Currency = "usd",
                        UnitAmount = item.pricePerUnitInCents,
                        ProductData = new SessionLineItemPriceDataProductDataOptions
                        {
                            Name = item.productName
                        }
                    },
                    Quantity = item.quantity,
                }).ToList();

                var options = new SessionCreateOptions
                {
                    PaymentMethodTypes = new List<string>
                    {
                        "card"
                    },
                    LineItems = listItems,
                    Mode = "payment",
                    SuccessUrl = "http://localhost:3000/success", // Add sucess url
                    CancelUrl = "http://localhost:3000/cancel" // Add Cancel url
                };

                var service = new SessionService();
                var session = service.Create(options);

                return Ok(new { url = session.Url });

            } catch (StripeException e)
            {
                //return e.Message;
                Console.WriteLine(e.Message);
                return StatusCode(500, new { error = e.Message });
            }

		}
	}
}

