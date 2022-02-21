// STYLES
import "./Login.css";

import { Fragment, useEffect } from "react";
import { Store } from "../../../services";

const $store = new Store();

const Login = () => {

  const login = () => {
    $store.pushToStore("user", {
      name: "test",
      email: "test@test.com",
      password: "test",
    });
  }

  useEffect(() => {
    login();
  }, []);
  return (
    <Fragment>
      <h5 className="text-muted text-center text-uppercase py-3 font-16">Sign In</h5>
      <input className="form-control" type="text" required placeholder="Enter your username" />
    </Fragment>
  );
}

export default Login;