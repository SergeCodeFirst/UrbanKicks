using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
	public class User
	{
        [Key]
        public int UserId { get; set; }
        public string? First_name { get; set; }
        public string? Last_name { get; set; }
        public string? Email { get; set; }
        public string? Street_address { get; set; }
        public string? City { get; set; }
        public string? State { get; set; }
        public int Zipcode { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;

        // list of all ShippingAddress our user has
        public List<ShippingAddress>? UserShippingAddresses { get; set; }

        
    }
}

