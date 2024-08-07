import { useEffect } from 'react'
import { Outlet } from "react-router-dom";
import Header from '../components/Header'
import Footer from '../components/Footer';
import { putDummy, getDummies } from '../utils/api-calls';

function Layout() {

    useEffect(() => {
        const dummyTest = async () => {
            await putDummy()
            const dummies = await getDummies()
            console.log(dummies)
        }
        dummyTest()
    }, [])

    return (
        <div className='w-screen h-screen flex flex-col'>
            <Header />
            <main className='flex-grow'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout