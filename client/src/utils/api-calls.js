import axios from 'axios'

const BASE_URL = process.env.NODE_ENV === 'development' 
    ? process.env.REACT_APP_BACKEND_URI 
    : window._env_.REACT_APP_BACKEND_URI;

const backend = axios.create({
    baseURL: BASE_URL
})

export async function putDummy() {
    try {
        await backend.put('/dummies')
    } catch (error) {
        console.error(error)
    }
}

export async function getDummies() {
    try {
        const res = await backend.get('/dummies')
        return res.data
    } catch (error) {
        console.error(error)
    }
}

export default backend