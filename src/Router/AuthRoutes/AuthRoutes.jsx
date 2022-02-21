import { Route } from "react-router-dom";

// LAYOUTS
import { AuthLayout } from "../../layouts"

// PAGES
import {
  Login,
  Register,
} from  "../../pages/auth";

const AuthRoutes = () => {
  return (
    <Route path="auth" element={<AuthLayout />}>
      <Route path="login" element={<Login />}></Route>
      <Route path="register" element={<Register />}></Route>
    </Route>
  );
}

export default AuthRoutes;
