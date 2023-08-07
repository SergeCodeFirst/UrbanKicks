using System;
using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Data
{
	public class DataContext : DbContext
	{
		public DataContext( DbContextOptions<DataContext> options) : base(options)
		{

		}
		// Create tables For our Db
		public DbSet<User> Users { get; set; }
        public DbSet<ShippingAddress> ShippingAddresses { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<ProductAndOrder> ProductAndOrders { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductSize> ProductSizes { get; set; }
        public DbSet<Brand> Brands { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<ProductAndCollection> ProductAndCollections { get; set; }
        public DbSet<Collection> Collections { get; set; }

    }
}

