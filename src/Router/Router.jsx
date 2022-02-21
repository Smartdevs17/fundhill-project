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
        {AuthRoutes()}  {/* AUTH ROUTES */}
        {AdminRoutes()}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
