import React from 'react';
import { BrowserRouter, Routes, Route, createBrowserRouter } from 'react-router-dom';
import Elixir from '../pages/products/Elixir';
import Home from '../pages/home/Home';
import LayoutRoot from '../layout/LayoutRoot';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutRoot />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    }
])
