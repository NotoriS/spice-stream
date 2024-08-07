using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers;

[ApiController]
[Route("auth")]
public class AuthController : ControllerBase
{
    [Authorize]
    [HttpGet("active")]
    public IActionResult IsLoggedIn()
    {
        return Ok();
    }
}