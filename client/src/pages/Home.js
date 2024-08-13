import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <>
      <div className="w-full py-40 bg-[url('../images/food_home.png')] bg-cover bg-no-repeat bg-center">
        <div className='w-full max-w-screen-xl px-4 mx-auto'>
          <h1 className='text-white text-6xl font-bold text-center mb-3'>Welcome to SpiceStream!</h1>
          <p className='font-bold text-white text-center mb-5'>Discover, Share, and Savor Recipes with a Community Passionate About Cooking</p>
          <div className='flex justify-center'>
            <button onClick={() => navigate('/recipes')} className="text-white bg-yellow-800 hover:bg-yellow-900 font-medium rounded-lg text-md px-5 py-3 text-center">Explore Recipes</button>
          </div>
        </div>
      </div>
      <div className='w-full max-w-screen-xl p-4 mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-2'>About Us</h2>
        <p className='mb-5'>At SpiceStream, we're all about bringing food lovers together to share their favorite recipes and culinary creations. Whether you're a home cook, a professional chef, or just someone who loves trying out new dishes, SpiceStream is the perfect place for you!</p>
        <p className='mb-5'>Join us on SpiceStream and turn every meal into an adventure!</p>
      </div>
    </>
  )
}

export default Home