using System;
using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
	public class Category
	{
        [Key]
        public int CategoryId { get; set; }
        public string? CategoryName { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;

        // all products in a catergory
        public List<Product>? MyProducts { get; set; }
    }
}

