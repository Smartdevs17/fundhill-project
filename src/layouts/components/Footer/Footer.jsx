import { Fragment } from 'react'
import { NavLink} from "react-router-dom";

function Footer() {
  return (
        <Fragment>
             
            <div class="content-page">
                <div class="content">
                    
                    <div class="container-fluid">
                        
                        <div class="row">
                            <div class="col-12">
                                <div class="page-title-box">
                                    <div class="page-title-right">
                                        <ol class="breadcrumb m-0">
                                            <li class="breadcrumb-item"><NavLink to="/">Uplon</NavLink></li>
                                            <li class="breadcrumb-item"><NavLink to="/">Pages</NavLink></li>
                                            <li class="breadcrumb-item active">Starter</li>
                                        </ol>
                                    </div>
                                    <h4 class="page-title">Starter page</h4>
                                </div>
                            </div>
                        </div>     
                        
                    </div> 
                </div> 

                

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