using System;
using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
	public class ProductSize
	{
        [Key]
        public int ProductSizeId { get; set; }
        public string? Productsize { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;

        // product id with instaces to get info
        public int ProductId { get; set; }
        public Product? MyProduct { get; set; }
    }
}

