import React from 'react'
import { Outlet, Routes, Route } from "react-router-dom";
import AuthRouter from "../Routers/AuthRouter";

export default function AuthLayout() {
    return (
        <div className="container">
            <Routes>
                {
                    AuthRouter.map((item) => <Route path={item.path} key={'router-' + item.name} 
                        element={<item.component />}/>)
                }
            </Routes>
            <Outlet />
        </div>
    )
}

