using Event.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Identity;
using Event.Models;

namespace Event.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IConfiguration _configuration;
        private readonly IPasswordHasher<Loggin> _passwordHasher;

        public AuthController(ApplicationDbContext context, IConfiguration configuration, IPasswordHasher<Loggin> passwordHasher)
        {
            _context = context;
            _configuration = configuration;
            _passwordHasher = passwordHasher;
        }

        [HttpPost("login")]
        public IActionResult Login(Loggin model)
        {
            // Поиск пользователя по email
            var user = _context.Loggin.SingleOrDefault(u => u.email == model.email);

            if (user == null || _passwordHasher.VerifyHashedPassword(user, user.password, model.password) == PasswordVerificationResult.Failed)
            {
                return Unauthorized("Invalid credentials");
            }

            // Создание JWT токена
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim(ClaimTypes.Name, user.email) // Используем email в качестве имени пользователя
                }),
                Expires = DateTime.UtcNow.AddHours(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);

            // Возвращаем токен в ответе
            return Ok(new { Token = tokenHandler.WriteToken(token) });
        }

        // Метод для регистрации нового пользователя
        [HttpPost("register")]
        public IActionResult Register(Loggin model)
        {
            // Проверка, есть ли уже пользователь с таким email
            if (_context.Loggin.Any(u => u.email == model.email))
            {
                return BadRequest("Email already in use");
            }

            // Хэширование пароля перед сохранением
            var hashedPassword = _passwordHasher.HashPassword(model, model.password);

            // Создание нового пользователя
            var newUser = new Loggin
            {
                email = model.email,
                password = hashedPassword
            };

            _context.Loggin.Add(newUser);
            _context.SaveChanges();

            return Ok("User registered successfully");
        }
    }
}
