using System;
using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
	public class Product
	{
        [Key]
        public int ProductId { get; set; }
        public string? ProductName { get; set; }
        public string? ProductDescription { get; set; }
        public int ProductPrice { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;


        // list of all orders our product is part of
        public List<Order>? AllOrders { get; set; }

        // list of product size our product has
        public List<ProductSize>? MyProductSize { get; set; }

        // category id with an instance to get info
        public int CategoryId { get; set; }
        public Category? MyCategory { get; set; }

        // brant id with an instance to get info
        public int BrandId { get; set; }
        public Brand? MyBrand { get; set; }

        // list of all Collection our product is part of
        public List<Collection>? AllCollections { get; set; }
    }
}

