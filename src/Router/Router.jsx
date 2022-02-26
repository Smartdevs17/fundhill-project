import {
  BrowserRouter,
  Routes,
} from "react-router-dom";
import AdminRoutes from "./AdminRoutes/AdminRoutes";
import AuthRoutes from "./AuthRoutes";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
      {/* AUTH ROUTES */}
        {AuthRoutes()}  
        {/* ADMIN ROUTE */}
        {AdminRoutes()}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
