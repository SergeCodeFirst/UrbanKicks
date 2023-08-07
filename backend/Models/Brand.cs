using System;
using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
	public class Brand
	{
        [Key]
        public int BrandId { get; set; }
        public string? BrandName { get; set; }
        public string? BrandEmail { get; set; }
        public string? BrandPhoneNo { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;

        // all Product from our brand
        public List<Product>? AllProducts { get; set; }
    }
}

