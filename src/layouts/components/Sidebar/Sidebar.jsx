import { Fragment } from 'react'
import { NavLink} from "react-router-dom";
import { GoCalendar} from "react-icons/go";

import {MdOutlineDashboard,MdOutlineSpaceDashboard,MdContentCopy,MdPages} from "react-icons/md"
import "./sidebar.css"

function Sidebar() {
  return (
    <Fragment>
            <div class="left-side-menu">

                <div class="slimscroll-menu">

                    <div id="sidebar-menu">

                        <ul class="metismenu" id="side-menu">

                            <li class="menu-title">Navigation</li>

                            <li>
                                <NavLink to="index.html">
                                    <i ><MdOutlineDashboard /></i>
                                    
                                    <span> Dashboard </span>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="calendar.html">
                                    <i > <GoCalendar  /> </i>
                                    <span> Calendar </span>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/">
                                    <i ><MdOutlineSpaceDashboard  /></i>
                                    
                                    <span> Layouts </span>
                                    <span class="badge badge-danger badge-pill float-right">New</span>
                                </NavLink>
                                <ul class="nav-second-level" >
                                    <li><NavLink to="layouts-dark-sidebar.html">Dark Sidebar</NavLink></li>
                                    <li><NavLink to="layouts-small-sidebar.html">Small Sidebar</NavLink></li>
                                    <li><NavLink to="layouts-sidebar-collapsed.html">Sidebar Collapsed</NavLink></li>
                                    <li><NavLink to="layouts-unsticky.html">Unsticky Layout</NavLink></li>
                                    <li><NavLink to="layouts-boxed.html">Boxed Layout</NavLink></li>
                                </ul>
                            </li>
                
                            <li>
                                <NavLink to="/">
                                    <i ><MdPages /></i>
                                    
                                    <span> Pages </span>
                                    <span class="menu-arrow"></span>
                                </NavLink>
                                <ul class="nav-second-level" >
                                    <li><NavLink to="pages-starter.html">Starter Page</NavLink></li>
                                    <li><NavLink to="pages-login.html">Login</NavLink></li>
                                    <li><NavLink to="pages-register.html">Register</NavLink></li>
                                    <li><NavLink to="pages-recoverpw.html">Recover Password</NavLink></li>
                                    <li><NavLink to="pages-lock-screen.html">Lock Screen</NavLink></li>
                                    <li><NavLink to="pages-404.html">Error 404</NavLink></li>
                                    <li><NavLink to="pages-500.html">Error 500</NavLink></li>
                                </ul>
                            </li>

                            <li>
                                <NavLink to="/">
                                    <i > <MdContentCopy /></i>
                                 
                                    <span> Extra Pages </span>
                                    <span class="menu-arrow"></span>
                                </NavLink>
                                <ul class="nav-second-level" >
                                    <li><NavLink to="pages-timeline.html">Timeline</NavLink></li>
                                    <li><NavLink to="pages-invoice.html">Invoice</NavLink></li>
                                    <li><NavLink to="pages-pricing.html">Pricing</NavLink></li>
                                    <li><NavLink to="pages-gallery.html">Gallery</NavLink></li>
                                    <li><NavLink to="pages-maintenance.html">Maintenance</NavLink></li>
                                    <li><NavLink to="pages-comingsoon.html">Coming Soon</NavLink></li>
                                </ul>
                            </li>

                            {/* <li class="menu-title mt-2">Components</li> */}

                            {/* <li>
                                <NavLink to="/">
                                    <i class="mdi mdi-format-underline"></i>
                                    <span> User Interface </span>
                                    <span class="menu-arrow"></span>
                                </NavLink>
                                <ul class="nav-second-level" aria-expanded="false">
                                    <li><NavLink to="ui-buttons.html">Buttons</NavLink></li>
                                    <li><NavLink to="ui-cards.html">Cards</NavLink></li>
                                    <li><NavLink to="ui-dropdowns.html">Dropdowns</NavLink></li>
                                    <li><NavLink to="ui-checkbox-radio.html">Checkboxs-Radios</NavLink></li>
                                    <li><NavLink to="ui-navs.html">Navs</NavLink></li>
                                    <li><NavLink to="ui-progress.html">Progress</NavLink></li>
                                    <li><NavLink to="ui-modals.html">Modals</NavLink></li>
                                    <li><NavLink to="ui-notification.html">Notification</NavLink></li>
                                    <li><NavLink to="ui-alerts.html">Alerts</NavLink></li>
                                    <li><NavLink to="ui-carousel.html">Carousel</NavLink></li>
                                    <li><NavLink to="ui-bootstrap.html">Bootstrap UI</NavLink></li>
                                    <li><NavLink to="ui-typography.html">Typography</NavLink></li>
                                </ul>
                            </li>

                            <li>
                                <NavLink to="/">
                                    <i class="mdi mdi-package-variant-closed"></i>
                                    <span> Components </span>
                                    <span class="menu-arrow"></span>
                                </NavLink>
                                <ul class="nav-second-level" aria-expanded="false">
                                    <li><NavLink to="components-grid.html">Grid</NavLink></li>
                                    <li><NavLink to="components-range-sliders.html">Range sliders</NavLink></li>
                                    <li><NavLink to="components-sweet-alert.html">Sweet Alerts</NavLink></li>
                                    <li><NavLink to="components-ratings.html">Ratings</NavLink></li>
                                    <li><NavLink to="components-treeview.html">Treeview</NavLink></li>
                                    <li><NavLink to="components-tour.html">Tour</NavLink></li>
                                </ul>
                            </li>

                            <li>
                                <NavLink to="/">
                                    <i class="mdi mdi-puzzle-outline"></i>
                                    <span> Widgets </span>
                                    <span class="menu-arrow"></span>
                                </NavLink>
                                <ul class="nav-second-level" aria-expanded="false">
                                    <li><NavLink to="/">Tile Box</NavLink></li>
                                    <li><NavLink to="/">Chart Widgets</NavLink></li>
                                </ul>
                            </li>

                            <li>
                                <NavLink to="/">
                                    <i class="mdi mdi-black-mesa"></i>
                                    <span> Icons </span>
                                    <span class="menu-arrow"></span>
                                </NavLink>
                                <ul class="nav-second-level" aria-expanded="false">
                                    <li><NavLink to="icons-materialdesign.html">Material Design</NavLink></li>
                                    <li><NavLink to="icons-ionicons.html">Ion Icons</NavLink></li>
                                    <li><NavLink to="icons-fontawesome.html">Font awesome</NavLink></li>
                                    <li><NavLink to="icons-themify.html">Themify Icons</NavLink></li>
                                    <li><NavLink to="icons-simple-line.html">Simple line Icons</NavLink></li>
                                    <li><NavLink to="icons-weather.html">Weather Icons</NavLink></li>
                                    <li><NavLink to="icons-pe7.html">PE7 Icons</NavLink></li>
                                    <li><NavLink to="icons-typicons.html">Typicons</NavLink></li>
                                </ul>
                            </li>

                            <li>
                                <NavLink to="/">
                                    <i class="mdi mdi-file-document-box-check-outline"></i>
                                    <span class="badge badge-warning badge-pill float-right">8</span>
                                    <span> Forms </span>
                                </NavLink>
                                <ul class="nav-second-level" aria-expanded="false">
                                    <li><NavLink to="form-elements.html">General Elements</NavLink></li>
                                    <li><NavLink to="form-advanced.html">Advanced Form</NavLink></li>
                                    <li><NavLink to="form-validation.html">Form Validation</NavLink></li>
                                    <li><NavLink to="form-pickers.html">Form Pickers</NavLink></li>
                                    <li><NavLink to="form-wizard.html">Form Wizard</NavLink></li>
                                    <li><NavLink to="form-mask.html">Form Masks</NavLink></li>
                                    <li><NavLink to="form-uploads.html">Multiple File Upload</NavLink></li>
                                    <li><NavLink to="form-xeditable.html">X-editable</NavLink></li>
                                </ul>
                            </li>

                            <li>
                                <NavLink to="/">
                                    <i class="mdi mdi-table-settings"></i>
                                    <span> Tables </span>
                                    <span class="menu-arrow"></span>
                                </NavLink>
                                <ul class="nav-second-level" aria-expanded="false">
                                    <li><NavLink to="tables-basic.html">Basic Tables</NavLink></li>
                                    <li><NavLink to="tables-datatable.html">Data Tables</NavLink></li>
                                    <li><NavLink to="tables-responsive.html">Responsive Table</NavLink></li>
                                    <li><NavLink to="tables-tablesaw.html">Tablesaw</NavLink></li>
                                </ul>
                            </li>

                            <li>
                                <NavLink to="/">
                                    <i class="mdi mdi-poll"></i>
                                    <span> Charts </span>
                                    <span class="menu-arrow"></span>
                                </NavLink>
                                <ul class="nav-second-level" aria-expanded="false">
                                    <li><NavLink to="charts-flot.html">Flot Charts</NavLink></li>
                                    <li><NavLink to="charts-morris.html">Morris Charts</NavLink></li>
                                    <li><NavLink to="charts-chartjs.html">Chartjs</NavLink></li>
                                    <li><NavLink to="charts-peity.html">Peity Charts</NavLink></li>
                                    <li><NavLink to="charts-chartist.html">Chartist Charts</NavLink></li>
                                    <li><NavLink to="charts-c3.html">C3 Charts</NavLink></li>
                                    <li><NavLink to="charts-sparkline.html">Sparkline Charts</NavLink></li>
                                    <li><NavLink to="charts-knob.html">Jquery Knob</NavLink></li>
                                </ul>
                            </li>

                            <li class="menu-title mt-2">More</li>

                            <li>
                                <NavLink to="/">
                                    <i class="mdi mdi-share-variant"></i>
                                    <span> Multi Level </span>
                                    <span class="menu-arrow"></span>
                                </NavLink>
                                <ul class="nav-second-level nav" aria-expanded="false">
                                    <li>
                                        <NavLink to="/">Level 1.1</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/" aria-expanded="false">Level 1.2
                                            <span class="menu-arrow"></span>
                                        </NavLink>
                                        <ul class="nav-third-level nav" aria-expanded="false">
                                            <li>
                                                <NavLink to="/">Level 2.1</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/">Level 2.2</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li> */}

                            
                        </ul>

                    </div>

                    <div class="clearfix"></div>

                </div>

            </div>
    </Fragment>
    )
}

export default Sidebar