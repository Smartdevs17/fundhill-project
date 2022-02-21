import {
  BrowserRouter,
  Routes,
} from "react-router-dom";
import AuthRoutes from "./AuthRoutes";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {AuthRoutes()}  {/* AUTH ROUTES */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
