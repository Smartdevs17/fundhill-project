import {
  BrowserRouter,
  Routes,
} from "react-router-dom";
import AdminRoutes from "./AdminRoutes/AdminRoutes";
import AuthRoutes from "./AuthRoutes";
import HomeRoute from "./HomeRoute/HomeRoute"
import ErrorRoutes from "./ErrorRoutes/ErrorRoutes";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
      {/* AUTH ROUTES */}
        {AuthRoutes()}  
        {/* ADMIN ROUTE */}
        {AdminRoutes()}
        {HomeRoute()}
        {ErrorRoutes()}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
