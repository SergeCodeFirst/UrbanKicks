using System;
using System.ComponentModel.DataAnnotations;


namespace backend.Models
{
	public class ShippingAddress
    {
        [Key]
        public int ShippingAddressId { get; set; }
        public string? StreetAddress { get; set; }
        public string? City { get; set; }
        public string? State { get; set; }
        public int Zipcode { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;

        // User id with an instance to get info
        public int UserId { get; set; }
        public User? MyUser { get; set; }

        // list of all Orders to or shipping address
        public List<Order>? MyOrders { get; set; }

    }
}

