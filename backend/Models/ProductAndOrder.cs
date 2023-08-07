using System;
using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
	public class ProductAndOrder
	{
        [Key]
        public int ProductAndOrderId { get; set; }
        // product id with an instance to get info
        public int ProductId { get; set; }
        public Product? MyProduct { get; set; }

        // order id with an instance to get info
        public int OrderId { get; set; }
        public Order? MyOrder { get; set; }
    }
}

