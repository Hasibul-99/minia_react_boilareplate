import { Routes, Route } from "react-router-dom";
import AuthLayout from "../Layouts/Auth";
import PrivateLayout from "../Layouts/Private";
import ErrorPage404 from "../Pages/ErrorPages/404";

function App() {
  return (
    <>
      <Routes>
        <Route path="auth/*" element={<AuthLayout/>}>
        </Route>
        <Route path="/*" element={<PrivateLayout />}>
        </Route>
        <Route path="*" element={ErrorPage404} />
      </Routes>
    </>
  );
}

export default App;
