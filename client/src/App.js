import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Recipes from './pages/Recipes'
import MyPosts from './pages/MyPosts'
import NotFound from './pages/NotFound'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="register" element={<Register />} />
                    <Route path="login" element={<Login />} />
                    <Route path="recipes" element={<Recipes />} />
                    <Route path="myposts" element={<MyPosts />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App