import { Fragment } from 'react'
import { NavLink} from "react-router-dom";

function Footer() {
  return (
        <Fragment>
             
            {/* <div className="content-page"> */}
            

                <footer className="footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                2022 &copy; FundHill Developed by <NavLink to="/">Smart Developers</NavLink>
                            </div>
                        </div>
                    </div>
                </footer>
             

            {/* </div> */}


        </Fragment>
    )
}

export default Footer