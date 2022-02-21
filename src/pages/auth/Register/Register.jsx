// STYLES
import "./Register.css";

import { Fragment } from "react";

const Register = () => {
  return (
    <Fragment>
      <h5 className="text-muted text-center text-uppercase py-3 font-16">Register</h5>
      <input className="form-control" type="text" required placeholder="Enter your username" />
    </Fragment>
  );
}

export default Register;