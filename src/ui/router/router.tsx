import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from '../pages/Home/Home'
import { Detail } from '../pages/Detail/Detail'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route index element={<Home />} />
                <Route path=":id" element={<Detail/>} />
            </Routes>
        </BrowserRouter>
    )
}