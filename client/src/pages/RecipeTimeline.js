import { useState, useEffect } from 'react'
import RecipeCard from "../components/RecipeCard"
import RecipeArticle from '../components/RecipeArticle'
import { getAllRecipes } from '../utils/api-calls'

function RecipeTimeline() {
  const [recipeList, setRecipeList] = useState([])
  const [recipeArticleOpenId, setRecipeArticleOpenId] = useState(-1);

  useEffect(() => {
    const fetchRecipes = async () => {
      setRecipeList(await getAllRecipes())
    }
    fetchRecipes()
  }, [])

  const openRecipeArticle = id => {
    setRecipeArticleOpenId(id)
  }

  const closeRecipeArticle = () => {
    setRecipeArticleOpenId(-1)
  }

  const recipeCardMap = recipeList.map((recipe, index) => <RecipeCard key={index} recipe={recipe} index={index} openRecipeArticle={openRecipeArticle} />)

  return (
    <div className='h-full max-w-screen-xl mx-auto md:px-4'>
      <div className='md:border-x border-gray-100 mb-2'>
        {
          recipeArticleOpenId < 0
          ?
          <div className='flex flex-col'>
            {recipeCardMap}
          </div>
          :
          <RecipeArticle recipe={recipeList[recipeArticleOpenId]} closeRecipeArticle={closeRecipeArticle} />
        }
      </div>
      {recipeArticleOpenId < 0 && <p className='text-center text-gray-300 mb-5'>You've reached the end!</p>}
    </div>
  )
}

export default RecipeTimeline