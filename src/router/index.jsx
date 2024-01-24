import React from 'react';
import { BrowserRouter, Routes, Route, createBrowserRouter } from 'react-router-dom';
import Elixir from '../pages/products/Elixir';
import Home from '../pages/home/Home';
import LayoutRoot from '../layout/LayoutRoot';
import ElixirModal from '../pages/modals/Elixir';
import GetUpModal from '../pages/modals/GetUp';
import GetUp from '../pages/products/GetUp';
import Renew from '../pages/products/Renew';
import RenewModal from '../pages/modals/Renew';
import TonicModal from '../pages/modals/Tonic';
import Tonic from '../pages/products/Tonic';
import GetUpItems from '../pages/ProductDetails/GetUpItems';
import RenewItems from '../pages/ProductDetails/RenewItems';



export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutRoot />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/ElixirModal',
                element: <ElixirModal />
            },
            {
                path: '/Elixir',
                element: <Elixir />
            },
            {
                path: '/GetupModal',
                element: <GetUpModal />
            },
            {
                path: '/GetupDetails',
                element: <GetUpItems />
            },
            {
                path: '/Getup',
                element: <GetUp />
            },
            {
                path: '/RenewModal',
                element: <RenewModal />
            },
            {
                path: '/Renew',
                element: <Renew />
            },
            {
                path: '/RenewDetails',
                element: <RenewItems />
            },
            {
                path: '/TonicModal',
                element: <TonicModal />
            },
            {
                path: '/Tonic',
                element: <Tonic />
            }
        ]
    }
])
