using System;
using backend.Dtos.User;
using backend.Services.ResponseService;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;

namespace backend.Services.UserService
{
	public interface IUserService
	{
        Task<ServiceResponse<IEnumerable<GetUserDto>>> GetAllUsers();
        Task<ServiceResponse<AddUserDto>> AddUser(AddUserDto newUser);
        Task<ServiceResponse<GetUserDto>> DeleteUser(int UserId);
        Task<ServiceResponse<UpdateUserDto>> UpdateUserPartial(int UserId, [FromBody] JsonPatchDocument<UpdateUserDto> patchDocument);

    }
}

