import { Route } from "react-router-dom";
import Home from "../../pages/home/Home";

function HomeRoute() {
  return (
    <Route path="/" className="" element={<Home />} />
  )
}

export default HomeRoute