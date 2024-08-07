import { useState } from 'react'
import { Link } from 'react-router-dom'
import { register } from '../utils/api-calls'

function Register() {

    const [registrationError, setRegistrationError] = useState('')
    const [registrationInProgress, setRegistrationInProgress] = useState(false)

    const onRegister = async (e) => {
        e.preventDefault()

        setRegistrationInProgress(true)

        const email = e.target.email.value
        const password = e.target.password.value
        const confirm = e.target.confirmPassword.value

        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if (!emailRegex.test(email)) {
            setRegistrationError('*email is invalid')
            return
        }

        if (password !== confirm) {
            setRegistrationError('*passwords do not match')
            return
        }

        if (password.length < 8) {
            setRegistrationError('*password must be at least 8 characters')
            return
        }

        const lowercaseRegex = /^.*[a-z].*$/
        if (!lowercaseRegex.test(password)) {
            setRegistrationError('*password must contain at least 1 lowercase letter')
            return
        }

        const uppercaseRegex = /^.*[A-Z].*$/
        if (!uppercaseRegex.test(password)) {
            setRegistrationError('*password must contain at least 1 uppercase letter')
            return
        }

        const digitRegex = /^.*[0-9].*$/
        if (!digitRegex.test(password)) {
            setRegistrationError('*password must contain at least 1 digit (0-9)')
            return
        }

        const specialCharRegex = /^.*[#$@!%&*?].*$/
        if (!specialCharRegex.test(password)) {
            setRegistrationError('*password must contain at least 1 special character (#$@!%&*?)')
            return
        }

        setRegistrationError('')

        setRegistrationInProgress(true)
        await register(email, password, setRegistrationError)
        if (registrationError === '') {
            // TODO: Login
        }
        setRegistrationInProgress(false)
    }

    return (
        <div className="w-full h-full flex flex-col p-4">
            <div className="w-full m-auto max-w-screen-xl bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">Register</h2>
                <form onSubmit={onRegister}>
                    {/* <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-600 text-sm font-medium mb-2">Name</label>
                        <input type="text" id="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter your name"></input>
                    </div> */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">Email</label>
                        <input type="email" id="email" required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-red-400" placeholder="Enter your email"></input>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">Password</label>
                        <input type="password" id="password" required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-red-400" placeholder="Enter your password"></input>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-gray-600 text-sm font-medium mb-2">Confirm Password</label>
                        <input type="password" id="confirmPassword" required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-red-400" placeholder="Enter your password"></input>
                    </div>
                    <p className="my-4 text-center text-sm text-red-600">{registrationError}</p>
                    <button type="submit" className="w-full bg-red-600 text-white py-2 rounded-lg font-medium hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-400">
                        {registrationInProgress ? '...' : 'Register'}
                    </button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-600">
                    Already have an account? <Link to="/login" className="text-red-600 hover:underline">Log in</Link>
                </p>
            </div>
        </div>
    )
}

export default Register