using System;
using System.ComponentModel.DataAnnotations;

namespace backend.Dtos.User
{
	public class UpdateUserDto
	{
        public int UserId { get; set; }
        [Required(ErrorMessage = "Need a name")]
        public string? First_name { get; set; }
        public string? Last_name { get; set; }
        public string? Email { get; set; }
        public string? Street_address { get; set; }
        public string? City { get; set; }
        public string? State { get; set; }
        public int Zipcode { get; set; }
    }
}

