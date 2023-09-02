using System;
using System.ComponentModel.DataAnnotations;

namespace backend.Dtos.User
{
	public class AddUserDto
    {
        [Required(ErrorMessage = "First Name is Required")]
        public string? First_name { get; set; }
        [Required(ErrorMessage = "Last Name is Required")]
        public string? Last_name { get; set; }
        [Required(ErrorMessage = "Email is Required")]
        [EmailAddress(ErrorMessage = "Must be an email")]
        public string? Email { get; set; }
        [Required(ErrorMessage = "Street Address is Required")]
        public string? Street_address { get; set; }
        [Required(ErrorMessage = "City is Required")]
        public string? City { get; set; }
        [Required(ErrorMessage = "State is Required")]
        public string? State { get; set; }
        [Required(ErrorMessage = "ZipCode is Required")]
        public int Zipcode { get; set; }
    }
}

