// STYLES
import "./Login.css";

import { Fragment, useEffect } from "react";
import { Store } from "../../../services";
import {Link} from 'react-router-dom'
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
      <h5 className="text-muted text-center text-uppercase py-3 font-16">Login In</h5>
      {/* <input className="form-control" type="text" required placeholder="Enter your username" />
      <input class="form-control" type="password" required="" id="password" placeholder="Enter your password"/> */}
      
      <form action="#" class="mt-2">
          
          <div class="form-group mb-3">
              <input class="form-control" type="text" required="" placeholder="Enter your username" />
          </div>

          <div className="form-group mb-3">
              <input className="form-control" type="password" required="" id="password" placeholder="Enter your password" />
          </div>

          <div className="form-group mb-3">
              <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="checkbox-signin" checked />
                  <label className="custom-control-label" for="checkbox-signin">Remember me</label>
              </div>
          </div>

          <div className="form-group text-center">
              <button className="btn btn-success btn-block waves-effect waves-light" type="submit"> Log In </button>
          </div>

          <Link to="#" className="text-muted"><i className="mdi mdi-lock mr-1"></i> Forgot your password?</Link>

          <div className="form-group">
          <Link to="/auth/register" className="text-muted"> Don't have an account Yet?Register</Link>
          </div>


      </form>
    </Fragment>
  );
}

export default Login;