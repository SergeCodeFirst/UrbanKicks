using System;


namespace backend.Services.PaymentService
{
	public class PaymentService : IPaymentService
	{
		public async Task<List<string>> pay()
		{
			//var res =  new List<string>
			//{
			//	"Hello from Pyment services"
			//};

			List<string> res = new List<string>();
			res.Add("Hello From Payment Service");

			return res;

        }
	}
}

