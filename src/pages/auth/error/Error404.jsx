import { Fragment } from 'react'
import { Link } from "react-router-dom";

function Error404() {
  return (
    <Fragment>
      <div className="authentication-bg">
        <div className="account-pages pt-5 my-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6">
                <div className="text-center">
                  <div className="text-error">4<i className="ion ion-md-sad mx-2" />4</div>
                  <h3 className="text-uppercase text-white">Page not Found</h3>
                  <p className="text-white mt-4">
                    It's looking like you may have taken a wrong turn. Don't worry... it happens to
                    the best of us. You might want to check your internet connection. Here's a little tip that might
                    help you get back on track.
                  </p>
                  <br />
                  <Link className="btn btn-pink waves-effect waves-light" to="/admin/dashboard"> Return Home</Link>
                </div>
              </div> {/* end col */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </div>
        {/* end page */}
      </div>
     
     

    </Fragment>
  )
}

export default Error404