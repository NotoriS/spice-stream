using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Database;

namespace server.Controllers;

[ApiController]
[Route("recipes")]
public class RecipeController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public RecipeController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    { 
        List<Recipe> recipes = await _context.Recipes
            .OrderByDescending(p => p.CreatedAt)
            .Include(r => r.Ingredients)
            .Include(r => r.Steps)
            .ToListAsync();
        return Ok(recipes);
    }

    [HttpPost]
    public async Task<IActionResult> CreateRecipe([FromBody] Recipe recipe)
    {
        recipe.CreatedAt = DateTime.Now;
        await _context.Recipes.AddAsync(recipe);
        await _context.SaveChangesAsync();
        return Created();
    }
}