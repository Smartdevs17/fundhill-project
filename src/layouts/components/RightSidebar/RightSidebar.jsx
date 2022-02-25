import { Fragment } from 'react'
import { NavLink} from "react-router-dom";

function RightSidebar() {
  return (
        <Fragment>
        <div className="right-bar">

            <div className="rightbar-title">
                <NavLink to="#" className="right-bar-toggle float-right">
                    <i className="mdi mdi-close"></i>
                </NavLink>
                <h4 className="font-18 m-0 text-white">Theme Customizer</h4>
            </div>
            <div className="slimscroll-menu">
        
                <div className="p-4">
                    <div className="alert alert-warning" role="alert">
                        <strong>Customize </strong> the overall color scheme, layout, etc.
                    </div>
                    <div className="mb-2">
                        <img src="/assets/images/layouts/light.png" className="img-fluid img-thumbnail" alt="" />
                    </div>
                    <div className="custom-control custom-switch mb-3">
                        <input type="checkbox" className="custom-control-input theme-choice" id="light-mode-switch" checked />
                        <label className="custom-control-label" for="light-mode-switch">Light Mode</label>
                    </div>
            
                    <div className="mb-2">
                        <img src="/assets/images/layouts/dark.png" className="img-fluid img-thumbnail" alt="" />
                    </div>
                    <div className="custom-control custom-switch mb-3">
                        <input type="checkbox" className="custom-control-input theme-choice" id="dark-mode-switch" data-bsStyle="/assets/css/bootstrap-dark.min.css" 
                            data-appStyle="/assets/css/app-dark.min.css" />
                        <label className="custom-control-label" for="dark-mode-switch">Dark Mode</label>
                    </div>
            
                    <div className="mb-2">
                        <img src="/assets/images/layouts/rtl.png" className="img-fluid img-thumbnail" alt="" />
                    </div>
                    <div className="custom-control custom-switch mb-5">
                        <input type="checkbox" className="custom-control-input theme-choice" id="rtl-mode-switch" data-appStyle="/assets/css/app-rtl.min.css" />
                        <label className="custom-control-label" for="rtl-mode-switch">RTL Mode</label>
                    </div>

                    <NavLink to="https://1.envato.market/XY7j5" className="btn btn-danger btn-block mt-3" target="_blank"><i className="mdi mdi-download mr-1"></i> Download Now</NavLink>
                </div>
            </div> 

        </div>
        <div className="rightbar-overlay"></div>

        <NavLink href="javascript:void(0);" className="right-bar-toggle demos-show-btn">
            <i className="mdi mdi-settings-outline mdi-spin"></i> &nbsp;Choose Demos
        </NavLink>
        </Fragment>
    )
}

export default RightSidebar