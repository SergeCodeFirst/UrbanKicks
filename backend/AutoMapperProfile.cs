using System;
using AutoMapper;
using backend.Models;
using backend.Dtos.User;

namespace backend
{
	public class AutoMapperProfile : Profile
	{
		public AutoMapperProfile()
		{
            CreateMap<AddUserDto, User>();
            CreateMap<User, GetUserDto>();
        }
    }
}

