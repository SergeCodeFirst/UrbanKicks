using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace backend.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class UserController : Controller
    {
        private readonly DbContext _context;

        public UserController(DbContext context)
        {
            _context = context;
        }


        [HttpGet("api/hello", Name ="Text")]
        public IActionResult Index()
        {
            return View();
        }
    }
}

