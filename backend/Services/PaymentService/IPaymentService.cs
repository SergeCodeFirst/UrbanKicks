using System;
namespace backend.Services.PaymentService
{
	public interface IPaymentService
	{
        Task<List<string>> pay();
    }
}

