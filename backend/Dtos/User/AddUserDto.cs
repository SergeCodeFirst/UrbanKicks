using System;
namespace backend.Dtos.User
{
	public class AddUserDto
    {
        public string? First_name { get; set; }
        public string? Last_name { get; set; }
        public string? Email { get; set; }
        public string? Street_address { get; set; }
        public string? City { get; set; }
        public string? State { get; set; }
        public int Zipcode { get; set; }
    }
}

