import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from '../components/Header'
import Footer from '../components/Footer';
import { authActive } from "../utils/api-calls";

function Layout() {

    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        const test = async () => {
            try {
                console.log(await authActive())
            } catch (error) {
                console.error(error)
            }
        }
        test()
    })

    return (
        <div className='w-screen h-screen flex flex-col'>
            <Header loggedIn={loggedIn} />
            <main className='flex-grow'>
                <Outlet context={[{setLoggedIn}]} />
            </main>
            <Footer />
        </div>
    )
}

export default Layout