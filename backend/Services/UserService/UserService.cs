using System;
using backend.Data;
using backend.Dtos.User;
using backend.Services.ResponseService;
using backend.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Services.UserService
{
	public class UserService : IUserService
	{
		private readonly DataContext _context;
		private readonly IMapper _mapper;

		// Database dependency Injectiom
		public UserService(DataContext context, IMapper mapper)
		{
			_context = context;
			_mapper = mapper;
		}
		// GET ALL USERS
		public async Task<ServiceResponse<IEnumerable<GetUserDto>>> GetAllUsers()
		{
			// Mapping from the User to GetUserDto class with AutoMapper
			var AllGetUsersDto = await _context.Users.Select(user => _mapper.Map<GetUserDto>(user)).ToListAsync();

            // Malunally craeting an instance of GetUserDto for each User class we get
            //var AllUsers = _context.Users.Select(user => new GetUserDto
            //{
            //	UserId = user.UserId,
            //	First_name = user.First_name,
            //	Last_name = user.Last_name,
            //	Email = user.Email,
            //	City = user.City,
            //	Street_address = user.Street_address,
            //	State = user.State,
            //	Zipcode = user.Zipcode
            //}).ToList();

            // New service Response class to send the Data
            var NewServiceResponse = new ServiceResponse<IEnumerable<GetUserDto>>();

			NewServiceResponse.Data = AllGetUsersDto;
			NewServiceResponse.Success = true;
			NewServiceResponse.Message = "Here are all the users";

			return NewServiceResponse;

        }

        // ADD USER
        public async Task<ServiceResponse<AddUserDto>> AddUser([FromBody] AddUserDto newUser)
		{
			// Transform from AddUserDto to User class With Automapper
			var userToAdd = _mapper.Map<User>(newUser);

            // Send the new User class to the database
            _context.Users.Add(userToAdd);

            // Save changes Asynchronously
            await _context.SaveChangesAsync();

			// New service Response class to send the created User Data
            var NewServiceResponse = new ServiceResponse<AddUserDto>();

            NewServiceResponse.Data = newUser;
            NewServiceResponse.Success = true;
			NewServiceResponse.Message = "User Added Successfully!";

			return NewServiceResponse;
		}

        //DELETE USER
        public async Task<ServiceResponse<GetUserDto>> DeleteUser(int UserId)
        {
            // New service Response class to send the created User Data
            var NewServiceResponse = new ServiceResponse<GetUserDto>();

            //Get User to delete
            var UserToDelete = await _context.Users.SingleOrDefaultAsync(user => user.UserId == UserId);

            // check if user exists
            if (UserToDelete != null)
            {
                _context.Users.Remove(UserToDelete);
                await _context.SaveChangesAsync();

                NewServiceResponse.Success = true;
                NewServiceResponse.Message = "User was deleted Successfully!";

                return NewServiceResponse;
            }

            NewServiceResponse.Success = false;
            NewServiceResponse.Message = "User Not Found!";

            return NewServiceResponse;

        }
    }
}

