using System;
using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
	public class ProductAndCollection
	{
        [Key]
        public int ProductAndCollectionId { get; set; }

        // Collection id with an instance to get info
        public int CollectionId { get; set; }
        public Collection? MyCollection { get; set; }

        // product id with an instance to get info
        public int ProductId { get; set; }
        public Product? MyProduct { get; set; }
    }
}

