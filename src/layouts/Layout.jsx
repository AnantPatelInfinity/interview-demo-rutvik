import React from 'react'
import Home from '../Home'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (

        <>
            <Home />
            <Outlet />
        </>
    )
}

export default Layout