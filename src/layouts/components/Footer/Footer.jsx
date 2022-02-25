import { Fragment } from 'react'
import { NavLink,Outlet} from "react-router-dom";

function Footer() {
  return (
        <Fragment>
             
            <div class="content-page">
             

                <Outlet />

                <footer class="footer">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                2022 &copy; Smart Developers theme by <NavLink to="/">Coderthemes</NavLink>
                            </div>
                        </div>
                    </div>
                </footer>
             

            </div>

          
        </Fragment>
    )
}

export default Footer