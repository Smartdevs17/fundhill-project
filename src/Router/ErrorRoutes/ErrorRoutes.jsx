import { Route } from "react-router-dom";

// LAYOUTS

// PAGES
import {

  Error404
} from  "../../pages/auth";

const ErrorRoutes = () => {
  return (
    <Route path="*" element={<Error404 />} /> 
  );
}

export default ErrorRoutes;