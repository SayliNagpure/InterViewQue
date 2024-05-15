import React from 'react'
import { BrowerRouter, BrowserRouter, Route, Routes } from "react-router-dom"
import App from './App'
import Create from './Create'
import Edit from './Edit'
const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>} />
                <Route path='/create' element={<Create/>}/>
                <Route path='/edit/:id' element={<Edit/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter