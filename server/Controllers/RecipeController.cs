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
            .Include(r => r.Ingredients.OrderBy(i => i.IngredientNumber))
            .Include(r => r.Steps.OrderBy(s => s.StepNumber))
            .ToListAsync();
        return Ok(recipes);
    }

    [HttpPost]
    public async Task<IActionResult> CreateRecipe([FromBody] Recipe recipe)
    {
        recipe.CreatedAt = DateTime.Now;

        int num = 1;
        foreach (Ingredient ingredient in recipe.Ingredients)
        {
            ingredient.IngredientNumber = num;
            num++;
        }

        num = 1;
        foreach (Step step in recipe.Steps)
        {
            step.StepNumber = num;
            num++;
        }

        await _context.Recipes.AddAsync(recipe);
        await _context.SaveChangesAsync();
        return Created();
    }
}