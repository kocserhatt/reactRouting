import App from './App.jsx'
import {Home} from './home.jsx'
import {Posts} from './posts.jsx'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { NotFound } from './notFound';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={App}></Route>
                <Route path='/home' Component={Home}></Route>
                <Route path='/posts' element={<Posts></Posts>} ></Route>
                <Route path='*' Component={NotFound}></Route>
            </Routes>
    </BrowserRouter>
    )
}