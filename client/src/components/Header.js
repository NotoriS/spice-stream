import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import spiceStreamIcon from '../images/spice-stream-icon.webp'

function Header({ loggedIn }) {
    const [navExpanded, setNavExpanded] = useState(false)
    const navigate = useNavigate()

    return (
        <nav className="sticky bg-yellow-50 w-full z-20 top-0 start-0 border-b border-gray-100">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <NavLink to="/home" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={spiceStreamIcon} className="h-8" alt="SpiceStream Logo"></img>
                    <span className="self-center text-red-600 text-3xl font-semibold whitespace-nowrap">SpiceStream</span>
                </NavLink>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    {
                        loggedIn ?
                        <button className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-400 font-medium rounded-lg text-sm px-4 py-2 text-center">Logout</button> :
                        <button onClick={() => navigate('/login')} className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-400 font-medium rounded-lg text-sm px-4 py-2 text-center">Login</button>
                    }
                    <button onClick={() => setNavExpanded(!navExpanded)} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-yellow-800 rounded-lg md:hidden hover:bg-yellow-100 focus:outline-none focus:ring-4 focus:ring-yellow-100" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div className={`${navExpanded ? "" : "hidden"} items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-sticky`}>
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-yellow-50">
                        <li>
                            <NavLink to="/home" className="block py-2 px-3 text-yellow-800 rounded hover:bg-red-600 hover:text-white md:hover:bg-transparent md:hover:text-red-600 md:p-0" aria-current="page">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/recipes" className="block py-2 px-3 text-yellow-800 rounded hover:bg-red-600 hover:text-white md:hover:bg-transparent md:hover:text-red-600 md:p-0">Recipes</NavLink>
                        </li>
                        <li>
                            <NavLink to="/myposts" className="block py-2 px-3 text-yellow-800 rounded hover:bg-red-600 hover:text-white md:hover:bg-transparent md:hover:text-red-600 md:p-0">My Posts</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header