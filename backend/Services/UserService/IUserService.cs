using System;
using backend.Dtos.User;
using backend.Services.ResponseService;

namespace backend.Services.UserService
{
	public interface IUserService
	{
        public Task<ServiceResponse<IEnumerable<GetUserDto>>> GetAllUsers();
        public Task<ServiceResponse<AddUserDto>> AddUser(AddUserDto newUser);
        public Task<ServiceResponse<GetUserDto>> DeleteUser(int UserId);

    }
}

