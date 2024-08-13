
const RecipeArticle = ({ recipe, closeRecipeArticle }) => {
    return (
      <div className="bg-white p-5 border-b border-gray-100">
        <div className="flex flex-row justify-between items-center">
            <h1 className="text-4xl font-bold text-red-600">{recipe.title}</h1>
            <button onClick={() => closeRecipeArticle()} className=" rounded text-xl hover:bg-neutral-100 py-1 px-3">X</button>
        </div>
        <p className="text-gray-300 mt-1">2024-08-12 9:05 PM</p>
        <p className="text-gray-700 mt-2">{recipe.description}</p>
      </div>
    );
  };
  
  export default RecipeArticle;