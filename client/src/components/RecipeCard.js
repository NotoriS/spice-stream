
const RecipeCard = ({ recipe, index, openRecipeArticle }) => {
    return (
      <div onClick={() => openRecipeArticle(index)} className="bg-white hover:bg-gray-50 p-5 border-b border-gray-100">
        <h1 className="text-2xl font-bold text-red-600">{recipe.title}</h1>
        <p className="text-gray-300 mt-1">2024-08-12 9:05 PM</p>
        <p className="text-gray-700 mt-2">{recipe.description}</p>
      </div>
    );
  };
  
  export default RecipeCard;