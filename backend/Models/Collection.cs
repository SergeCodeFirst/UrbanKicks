using System;
using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
	public class Collection
	{
        [Key]
        public int CollectionId { get; set; }
        public string? CollectionName { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;

        // list of all products part of a collection
        public List<Product>? AllProducts { get; set; }
    }
}

