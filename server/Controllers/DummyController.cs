using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Database;

namespace server.Controllers;

[ApiController]
[Route("dummies")]
public class DummyController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    
    public DummyController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        List<Dummy> dummies = await _context.Dummies.ToListAsync();
        return Ok(dummies);
    }

    [HttpPut]
    public async Task<IActionResult> Put()
    {
        Dummy dummy = new()
        {
            Text = "Hello!"
        };
        await _context.Dummies.AddAsync(dummy);
        await _context.SaveChangesAsync();
        return Ok();
    }
}