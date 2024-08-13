import axios from 'axios'

const BASE_URL = process.env.NODE_ENV === 'development' 
    ? process.env.REACT_APP_BACKEND_URI 
    : window._env_.REACT_APP_BACKEND_URI;

const backend = axios.create({
    baseURL: BASE_URL
})

export async function getAllRecipes() {
    const response = await backend.get('/recipes')
    return response.data
}

export default backend