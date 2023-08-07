using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
	public class Order
	{
        [Key]
        public int OrderId { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;

        // shipping Address id with an instance to get info
        public int ShippingAddressId { get; set; }
        public ShippingAddress? MyShippingAddress { get; set; }

        // list of products in our Order
        public List<Product>? AllProducts { get; set; }
    }
}

