import { Fragment } from 'react'
import { NavLink} from "react-router-dom";


function Navbar() {
  return (
    <Fragment>
             
             
            <div className="navbar-custom">
                <ul className="list-unstyled topnav-menu float-right mb-0">

                    <li className="dropdown notification-list dropdown d-none d-lg-inline-block ml-2">
                        <NavLink className="nav-link dropdown-toggle mr-0 waves-effect waves-light" data-toggle="dropdown" to="#" role="button" aria-haspopup="false" aria-expanded="false">
                            <img src="/assets/images/flags/us.jpg" alt="" height="12" />
                        </NavLink>
                        <div className="dropdown-menu dropdown-menu-right profile-dropdown ">

                            <NavLink to="/" className="dropdown-item notify-item">
                                <img src="/assets/images/flags/germany.jpg" alt="" className="mr-1" height="12" /> <span
                                    className="align-middle">German</span>
                            </NavLink>

                            <NavLink to="/" className="dropdown-item notify-item">
                                <img src="/assets/images/flags/italy.jpg" alt="" className="mr-1" height="12" /> <span
                                    className="align-middle">Italian</span>
                            </NavLink>

                            <NavLink to="/" className="dropdown-item notify-item">
                                <img src="/assets/images/flags/spain.jpg" alt="" className="mr-1" height="12" /> <span
                                    className="align-middle">Spanish</span>
                            </NavLink>

                            <NavLink to="/" className="dropdown-item notify-item">
                                <img src="/assets/images/flags/russia.jpg" alt="" className="mr-1" height="12" /> <span
                                    className="align-middle">Russian</span>
                            </NavLink>

                        </div>
                    </li>

                    <li className="dropdown notification-list">
                        <NavLink className="nav-link dropdown-toggle  waves-effect waves-light" data-toggle="dropdown" to="#" role="button" aria-haspopup="false" aria-expanded="false">
                            <i className="mdi mdi-bell-outline noti-icon"></i>
                            <span className="noti-icon-badge"></span>
                        </NavLink>
                        <div className="dropdown-menu dropdown-menu-right dropdown-lg">

                            <div className="dropdown-item noti-title">
                                <h5 className="font-16 text-white m-0">
                                    <span className="float-right">
                                        <NavLink to="" className="text-white">
                                            <small>Clear All</small>
                                        </NavLink>
                                    </span>Notification
                                </h5>
                            </div>

                            <div className="slimscroll noti-scroll">

                                <NavLink to="/" className="dropdown-item notify-item">
                                    <div className="notify-icon bg-success">
                                        <i className="mdi mdi-settings-outline"></i>
                                    </div>
                                    <p className="notify-details">New settings
                                        <small className="text-muted">There are new settings available</small>
                                    </p>
                                </NavLink>
                    
                                <NavLink to="/" className="dropdown-item notify-item">
                                    <div className="notify-icon bg-info">
                                        <i className="mdi mdi-bell-outline"></i>
                                    </div>
                                    <p className="notify-details">Updates
                                        <small className="text-muted">There are 2 new updates available</small>
                                    </p>
                                </NavLink>

                                <NavLink to="/" className="dropdown-item notify-item">
                                    <div className="notify-icon bg-danger">
                                        <i className="mdi mdi-account-plus"></i>
                                    </div>
                                    <p className="notify-details">New user
                                        <small className="text-muted">You have 10 unread messages</small>
                                    </p>
                                </NavLink>

                                <NavLink to="/" className="dropdown-item notify-item">
                                    <div className="notify-icon bg-info">
                                        <i className="mdi mdi-comment-account-outline"></i>
                                    </div>
                                    <p className="notify-details">Caleb Flakelar commented on Admin
                                        <small className="text-muted">4 days ago</small>
                                    </p>
                                </NavLink>

                                <NavLink to="/" className="dropdown-item notify-item">
                                    <div className="notify-icon bg-secondary">
                                        <i className="mdi mdi-heart"></i>
                                    </div>
                                    <p className="notify-details">Carlos Crouch liked
                                        <b>Admin</b>
                                        <small className="text-muted">13 days ago</small>
                                    </p>
                                </NavLink>
                            </div>

                            <NavLink to="/" className="dropdown-item text-primary notify-item notify-all">
                                View all
                                <i className="fi-arrow-right"></i>
                            </NavLink>

                        </div>
                    </li>

                    <li className="dropdown notification-list">
                        <NavLink className="nav-link dropdown-toggle  waves-effect waves-light" data-toggle="dropdown" to="#" role="button" aria-haspopup="false" aria-expanded="false">
                            <i className="mdi mdi-email-outline noti-icon"></i>
                            <span className="noti-icon-badge"></span>
                        </NavLink>
                        <div className="dropdown-menu dropdown-menu-right dropdown-lg">

                            <div className="dropdown-item noti-title">
                                <h5 className="font-16 text-white m-0">
                                    <span className="float-right">
                                        <NavLink to="" className="text-white">
                                            <small>Clear All</small>
                                        </NavLink>
                                    </span>Messages
                                </h5>
                            </div>

                            <div className="slimscroll noti-scroll">

                                <div className="inbox-widget">
                                    <NavLink to="#">
                                        <div className="inbox-item">
                                            <div className="inbox-item-img"><img src="/assets/images/users/avatar-1.jpg" className="rounded-circle" alt="" /></div>
                                            <p className="inbox-item-author">Chadengle</p>
                                            <p className="inbox-item-text text-truncate">Hey! there I'm available...</p>
                                        </div>
                                    </NavLink>
                                    <NavLink to="#">
                                        <div className="inbox-item">
                                            <div className="inbox-item-img"><img src="/assets/images/users/avatar-2.jpg" className="rounded-circle" alt="" /></div>
                                            <p className="inbox-item-author">Tomaslau</p>
                                            <p className="inbox-item-text text-truncate">I've finished it! See you so...</p>
                                        </div>
                                    </NavLink>
                                    <NavLink to="#">
                                        <div className="inbox-item">
                                            <div className="inbox-item-img"><img src="/assets/images/users/avatar-3.jpg" className="rounded-circle" alt="" /></div>
                                            <p className="inbox-item-author">Stillnotdavid</p>
                                            <p className="inbox-item-text text-truncate">This theme is awesome!</p>
                                        </div>
                                    </NavLink>
                                    <NavLink to="#">
                                        <div className="inbox-item">
                                            <div className="inbox-item-img"><img src="/assets/images/users/avatar-4.jpg" className="rounded-circle" alt="" /></div>
                                            <p className="inbox-item-author">Kurafire</p>
                                            <p className="inbox-item-text text-truncate">Nice to meet you</p>
                                        </div>
                                    </NavLink>
                                    <NavLink to="#">
                                        <div className="inbox-item">
                                            <div className="inbox-item-img"><img src="/assets/images/users/avatar-5.jpg" className="rounded-circle" alt="" /></div>
                                            <p className="inbox-item-author">Shahedk</p>
                                            <p className="inbox-item-text text-truncate">Hey! there I'm available...</p>

                                        </div>
                                    </NavLink>
                                </div> 

                            </div>
                            <NavLink to="/" className="dropdown-item text-primary notify-item notify-all">
                                View all
                                <i className="fi-arrow-right"></i>
                            </NavLink>

                        </div>
                    </li>

                    <li className="dropdown notification-list">
                        <NavLink className="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light" data-toggle="dropdown" to="#" role="button" aria-haspopup="false" aria-expanded="false">
                            <img src="/assets/images/users/avatar-1.jpg" alt="" className="rounded-circle" />
                            <span className="d-none d-sm-inline-block ml-1 font-weight-medium">Alex M.</span>
                            <i className="mdi mdi-chevron-down d-none d-sm-inline-block"></i>
                        </NavLink>
                        <div className="dropdown-menu dropdown-menu-right profile-dropdown ">

                            <div className="dropdown-header noti-title">
                                <h6 className="text-overflow text-white m-0">Welcome !</h6>
                            </div>


                            <NavLink to="/" className="dropdown-item notify-item">
                                <i className="mdi mdi-account-outline"></i>
                                <span>Profile</span>
                            </NavLink>

                            <NavLink to="/" className="dropdown-item notify-item">
                                <i className="mdi mdi-settings-outline"></i>
                                <span>Settings</span>
                            </NavLink>

                            <NavLink to="/" className="dropdown-item notify-item">
                                <i className="mdi mdi-lock-outline"></i>
                                <span>Lock Screen</span>
                            </NavLink>

                            <div className="dropdown-divider"></div>

                            <NavLink to="/" className="dropdown-item notify-item">
                                <i className="mdi mdi-logout-variant"></i>
                                <span>Logout</span>
                            </NavLink>

                        </div>
                    </li>

                    <li className="dropdown notification-list">
                        <NavLink to="/" className="nav-link right-bar-toggle waves-effect waves-light">
                            <i className="mdi mdi-settings-outline noti-icon"></i>
                        </NavLink>
                    </li>

                </ul>

                <div className="logo-box">
                    <NavLink to="index.html" className="logo text-center logo-dark">
                        <span className="logo-lg">
                            <img src="/assets/images/logo.png" alt="" height="22" />
                            {/* <!-- <span className="logo-lg-text-dark">Uplon</span> --> */}
                        </span>
                        <span className="logo-sm">
                            {/* <!-- <span className="logo-lg-text-dark">U</span> --> */}
                            <img src="/assets/images/logo-sm.png" alt="" height="24" />
                        </span>
                    </NavLink>

                    <NavLink to="index.html" className="logo text-center logo-light">
                        <span className="logo-lg">
                            <img src="/assets/images/logo-light.png" alt="" height="22" />
                            {/* <!-- <span className="logo-lg-text-dark">Uplon</span> --> */}
                        </span>
                        <span className="logo-sm">
                            {/* <!-- <span className="logo-lg-text-dark">U</span> --> */}
                            <img src="/assets/images/logo-sm-light.png" alt="" height="24" />
                        </span>
                    </NavLink>
                </div>

                <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
                    <li>
                        <button className="button-menu-mobile waves-effect waves-light">
                            <i className="mdi mdi-menu"></i>
                        </button>
                    </li>
        
                    <li className="d-none d-sm-block">
                        <form className="app-search">
                            <div className="app-search-box">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search..." />
                                    <div className="input-group-append">
                                        <button className="btn" type="submit">
                                            <i className="fas fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </li>

                    <li className="dropdown dropdown-mega d-none d-lg-block">
                        <NavLink className="nav-link dropdown-toggle waves-effect waves-light" data-toggle="dropdown" to="#" role="button" aria-haspopup="false" aria-expanded="false">
                            Mega Menu
                            <i className="mdi mdi-chevron-down"></i> 
                        </NavLink>
                        <div className="dropdown-menu dropdown-megamenu p-0">
                            <div className="row">
                                <div className="col-sm-5">

                                    <div className="p-4">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h5 className="font-16 mt-0"><i className="mdi mdi-toolbox-outline mr-1"></i> UI Components</h5>
                                                <ul className="list-unstyled megamenu-list">
                                                    <li>
                                                        <NavLink to="/">Widgets</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/">Calendar</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/">Range Sliders</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/">Sweet Alerts</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/">Ratings</NavLink>
                                                    </li>
                            
                                                    <li>
                                                        <NavLink to="/">Treeview Page</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/">Tour Page</NavLink>
                                                    </li>
                                                </ul>
                                            </div>
    
                                            <div className="col-md-6">
                                                <h5 className="font-16 mt-0"><i className="mdi mdi-flip-horizontal mr-1"></i> Layouts</h5>
                                                <ul className="list-unstyled megamenu-list">
                                                    <li>
                                                        <NavLink to="/">Dark Sidebar</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/">Small Sidebar</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/">Sidebar Collapsed</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/">Unsticky Layout</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/">Boxed Layout</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/">Topbar Light</NavLink>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-7">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="p-4">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="text-center">
                                                            <div>
                                                                <i className="fab fa-bootstrap text-purple h2 mb-0"></i>
                                                            </div>
                                                            <h5 className="font-16">Bootstrap</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="text-center mt-4 mt-md-0">
                                                            <div>
                                                                <i className="fab fa-npm text-danger h2 mb-0"></i>
                                                            </div>
                                                            <h5 className="font-16">Npm</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="text-center mt-4 mt-md-0">
                                                            <div>
                                                                <i className="fab fa-sass text-pink h2 mb-0"></i>
                                                            </div>
                                                            <h5 className="font-16">Sass support</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="text-center mt-4">
                                                            <div>
                                                                <i className="fas fa-tablet-alt text-dark h2 mb-0"></i>
                                                            </div>
                                                            <h5 className="font-16">Responsive</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="text-center mt-4">
                                                            <div>
                                                                <i className="fab fa-gulp text-primary h2 mb-0"></i>
                                                            </div>
                                                            <h5 className="font-16">Gulp Support</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="text-center mt-4">
                                                            <div>
                                                                <i className="far fa-file-code text-warning h2 mb-0"></i>
                                                            </div>
                                                            <h5 className="font-16">Free Landing</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="text-center">
                                                <div className="p-4">
                                                    <h4 className="mt-0">Special Discount Sale!</h4>
                                                    <h5 className="mt-4">Save up to <span className="text-primary">60%</span> off.</h5>
                                                    <p className="text-muted">Get free updates lifetime</p>
                                                    <NavLink to="https://1.envato.market/XY7j5" target="_blank" className="btn btn-primary btn-rounded">Download Now</NavLink>
                                                </div>
                                            </div>
                                
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </li>
                </ul>
            </div>

    </Fragment>
  )
}

export default Navbar