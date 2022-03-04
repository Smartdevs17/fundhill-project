// STYLES
import "./Register.css";


import { Fragment } from "react";
import { Link } from "react-router-dom"

const Register = () => {
  return (
    <Fragment>
      <h5 className="text-muted text-center text-uppercase py-3 font-16">Register</h5>
      {/* <input className="form-control" type="text" required placeholder="Enter your username" /> */}
      <form action="#" class="mt-2">

      <div class="form-group mb-3">
              <input class="form-control" type="text" required="" placeholder="Email" />
          </div>
          <div class="form-group mb-3">
              <input class="form-control" type="text" required="" placeholder="Username" />
          </div>

          <div className="form-group mb-3">
              <input className="form-control" type="password" required="" id="password" placeholder="Password" />
          </div>

          <div className="form-group mb-3">
              <input className="form-control" type="password" required="" id="password" placeholder="Confirm Password" />
          </div>

          <div className="form-group mb-3">
              <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="checkbox-signin" checked />
                  <label className="custom-control-label" for="checkbox-signin">Remember me</label>
              </div>
          </div>

          <div className="form-group text-center">
              <button className="btn btn-success btn-block waves-effect waves-light" type="submit"> Register</button>
          </div>

          <Link to="#" className="text-muted"><i className="mdi mdi-lock mr-1"></i> Forgot your password?</Link>
          <div className="form-group">
          <Link to="/auth/login" className="text-muted"> Have an account? Login</Link>
          </div>


      </form>
    </Fragment>
  );
}

export default Register;