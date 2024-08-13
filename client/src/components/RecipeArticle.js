import { useEffect, useCallback } from "react";
import { formatBackendDate } from "../utils/formatting";

const RecipeArticle = ({ recipe, closeRecipeArticle }) => {

    const escFunction = useCallback((event) => {
        if (event.key === "Escape") {
          closeRecipeArticle()
        }
    }, [closeRecipeArticle]);
    
    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
    
        return () => {
          document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction]);

    const ingredientMap = recipe.ingredients.map((ingredient, index) => {
        return(
            <li key={index}>
                <span>{ingredient.name}</span>
                <span>{" - "}</span>
                <span>{ingredient.quantity}</span>
            </li>
        )
    })

    const stepMap = recipe.steps.map((step, index) => {
        return(
            <div key={index}>
                <h2 className="text-3xl font-bold text-red-600 mt-5">{`Step ${index + 1}: ${step.title}`}</h2>
                <p className="mt-1">{step.body}</p>
            </div>
        )
    })

    return (
        <div className="bg-white p-5 border-b border-gray-100">
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-4xl font-bold text-red-600">{recipe.title}</h1>
                <button onClick={() => closeRecipeArticle()} className=" rounded text-xl hover:bg-neutral-100 py-1 px-3">X</button>
            </div>
            <p className="text-gray-300 mt-">{formatBackendDate(recipe.createdAt)}</p>
            <p className="mt-1">{recipe.description}</p>
            <div>
                <h2 className="text-3xl font-bold text-red-600 mt-5">Ingredients</h2>
                <ul className="list-disc mt-1 ms-5">
                    {ingredientMap}
                </ul>
            </div>
            {stepMap}
        </div>
    );
  };
  
  export default RecipeArticle;