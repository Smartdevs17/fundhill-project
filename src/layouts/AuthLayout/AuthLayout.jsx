import { Fragment } from "react";
import { NavLink, Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <Fragment>
      <div className="authentication-bg">
        <div className="account-pages pt-5 my-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6 col-xl-5">
                <div className="account-card-box">
                  <div className="card mb-0">
                    <div className="card-body p-4">
                      <div className="text-center">
                        <div className="my-3">
                          <NavLink to="/">
                            <span><img src="/assets/images/logo.png" alt="" height={28} /></span>
                          </NavLink>
                        </div>
                        <h5 className="text-muted text-uppercase py-3 font-16">Sign In</h5>
                      </div>
                      {/* FORMS WILL INJECTED */}
                      <Outlet />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default AuthLayout;