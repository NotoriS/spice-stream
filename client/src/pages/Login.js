import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className="w-full h-full flex flex-col p-4">
            <div className="w-full m-auto max-w-screen-xl bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">Login</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">Email</label>
                        <input type="email" id="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-red-400" placeholder="Enter your email"></input>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">Password</label>
                        <input type="password" id="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-red-400" placeholder="Enter your password"></input>
                    </div>
                    <button type="submit" className="w-full bg-red-600 text-white py-2 rounded-lg font-medium hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-400">Login</button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-600">
                    Don't have an account? <Link to="/register" className="text-red-600 hover:underline">Register</Link>
                </p>
            </div>
        </div>
    )
}

export default Login