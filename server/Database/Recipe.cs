namespace server.Database;

public class Recipe
{
    public int Id { get; set; }
    
    public string Title { get; set; }

    public string Description { get; set; }
    
    public ICollection<Ingredient> Ingredients { get; set; }
    
    public ICollection<Step> Steps { get; set; }
}