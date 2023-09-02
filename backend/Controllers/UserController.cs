using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using backend.Services.UserService;
using backend.Services.ResponseService;
using backend.Dtos.User;
using Microsoft.AspNetCore.JsonPatch;
using Azure;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace backend.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }


        // GET ALL USERS
        [HttpGet("/all", Name ="GetAllUsers")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<ServiceResponse<IEnumerable<GetUserDto>>>> GetAllUsers()
        {
            return Ok(await _userService.GetAllUsers());
        }

        // ADD USER
        [HttpPost("/add", Name ="AddaUser")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<ServiceResponse<AddUserDto>>> AddUser([FromBody]AddUserDto newUser)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var response = await _userService.AddUser(newUser);

            if (response.Success == false)
            {
                return BadRequest(response);
            }
            return Ok(response);
        }

        // UPDATE USER
        [HttpPatch("/{UserId:int}/updatepartial", Name ="UpdateUserWithPatch")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<ServiceResponse<UpdateUserDto>>> UpdateUser(int UserId, [FromBody] JsonPatchDocument<UpdateUserDto> UpdatedUser)
        {
            var response = await _userService.UpdateUserPartial(UserId, UpdatedUser);

            if (response.Success == false & UserId <= 0)
            {
                return BadRequest(response);
            }

            if (response.Success == false & UserId >= 1)
            {
                return NotFound(response);
            }

            return Ok(response);
        }

        //DELETE USER
        [HttpDelete("/delete", Name="DeleteUser")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        //[ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<ServiceResponse<GetUserDto>>> DeleteUser(int UserId)
        {
            var response = await _userService.DeleteUser(UserId);

            if (response.Success == false)
            {
                return NotFound(response);
            }

            //return NoContent();
            return Ok(response);
        }
    }
}

