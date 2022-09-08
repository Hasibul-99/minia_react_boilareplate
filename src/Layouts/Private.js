import React from "react";
import { Outlet, Route, Routes } from 'react-router-dom';
import PrivateRouter from "../Routers/PrivateRouter";

export default function PrivateLayout() {
  return (
    <div className="container">
      <Routes>
          {
              PrivateRouter.map((item) => <Route path={item.path} key={'router-' + item.name} 
                  element={<item.component />}/>)
          }
      </Routes>
      <Outlet />
    </div>
  );
}
