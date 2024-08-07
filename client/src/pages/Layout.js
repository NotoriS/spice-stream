import { Outlet } from "react-router-dom";
import Header from '../components/Header'
import Footer from '../components/Footer';

function Layout() {
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