import { Fragment } from 'react'
import { NavLink} from "react-router-dom";
import { GoCalendar} from "react-icons/go";

import {MdOutlineDashboard,MdOutlineSpaceDashboard,MdContentCopy,MdPages} from "react-icons/md"
import "./sidebar.css"

function Sidebar() {
  return (
    <Fragment>
            <div className="left-side-menu">

                <div className="slimscroll-menu">

                    <div id="sidebar-menu">

                        <ul className="metismenu" id="side-menu">

                            <li className="menu-title">Navigation</li>

                            <li>
                                <NavLink to="index.html">
                                    <i ><MdOutlineDashboard /></i>
                                    
                                    <span> Dashboard </span>
                                </NavLink>
                                {/* <ul className="nav-second-level" >
                                    <li><NavLink to="#">Dashboard</NavLink></li>
                                    <li><NavLink to="#">Daily History</NavLink></li>
                                    <li><NavLink to="#">Report</NavLink></li>
                                </ul> */}
                            </li>

                            <li>
                                <NavLink to="/">
                                    <i > <GoCalendar  /> </i>
                                    <span> Customer </span>
                                </NavLink>
                                <ul className="nav-second-level" >
                                    <li><NavLink to="layouts-dark-sidebar.html">New Customer</NavLink></li>
                                    <li><NavLink to="layouts-small-sidebar.html">All Customers</NavLink></li>
                                    <li><NavLink to="layouts-sidebar-collapsed.html">Withdraw</NavLink></li>
                                    <li><NavLink to="layouts-unsticky.html">Fixed Savings</NavLink></li>
                                    <li><NavLink to="layouts-boxed.html">Normal Savings</NavLink></li>
                                    <li><NavLink to="layouts-boxed.html">Delete Customer</NavLink></li>
                                    <li><NavLink to="layouts-boxed.html">Customer Details</NavLink></li>
                                    <li><NavLink to="layouts-boxed.html">Change Phone</NavLink></li>
                                    {/* <li><NavLink to="layouts-boxed.html">Normal Savings</NavLink></li>        */}
                                </ul>
                            </li>
                        
                            <li>
                                <NavLink to="/">
                                    <i > <GoCalendar  /> </i>
                                    <span> Savings Management </span>
                                </NavLink>
                                <ul className="nav-second-level" >
                                    <li><NavLink to="layouts-dark-sidebar.html">Deposit & Withdraw</NavLink></li>
                                    <li><NavLink to="layouts-small-sidebar.html">Statement of Account</NavLink></li>
                                    <li><NavLink to="layouts-sidebar-collapsed.html">My Transaction History</NavLink></li>
                                    <li><NavLink to="layouts-unsticky.html">Deposit Reversal</NavLink></li>
                                    <li><NavLink to="layouts-boxed.html">End of Day Report</NavLink></li>
                                </ul>
                            </li>


       

                            <li>
                                <NavLink to="/">
                                    <i ><MdOutlineSpaceDashboard  /></i>
                                    
                                    <span> Agent Management </span>
                                    {/* <span className="badge badge-danger badge-pill float-right">New</span> */}
                                </NavLink>
                                <ul className="nav-second-level" >
                                    <li><NavLink to="#">New Agent</NavLink></li>
                                    <li><NavLink to="#">All Agents</NavLink></li>
                                    <li><NavLink to="#">Credit Staff</NavLink></li>
                                    <li><NavLink to="#">Staff Expenses</NavLink></li>
                                    {/* <li><NavLink to="layouts-boxed.html">Boxed Layout</NavLink></li> */}
                                </ul>
                            </li>


                            <li>
                                <NavLink to="/">
                                    <i > <GoCalendar  /> </i>
                                    <span> Withdrawal Management </span>
                                </NavLink>
                                <ul className="nav-second-level" >
                                    <li><NavLink to="layouts-dark-sidebar.html">Approved Withdrawal</NavLink></li>
                                    <li><NavLink to="layouts-small-sidebar.html">Pending Withdrawal</NavLink></li>
                                    <li><NavLink to="layouts-sidebar-collapsed.html">Withdraw</NavLink></li>
                                   
                                </ul>
                            </li>

                            {/* <li>
                                <NavLink to="/">
                                    <i ><MdOutlineSpaceDashboard  /></i>
                                    
                                    <span> Layouts </span>
                                    <span className="badge badge-danger badge-pill float-right">New</span>
                                </NavLink>
                                <ul className="nav-second-level" >
                                    <li><NavLink to="layouts-dark-sidebar.html">Dark Sidebar</NavLink></li>
                                    <li><NavLink to="layouts-small-sidebar.html">Small Sidebar</NavLink></li>
                                    <li><NavLink to="layouts-sidebar-collapsed.html">Sidebar Collapsed</NavLink></li>
                                    <li><NavLink to="layouts-unsticky.html">Unsticky Layout</NavLink></li>
                                    <li><NavLink to="layouts-boxed.html">Boxed Layout</NavLink></li>
                                </ul>
                            </li> */}
                   
                
                            <li>
                                <NavLink to="/">
                                    <i ><MdPages /></i>
                                    
                                    <span> Accounting </span>
                                    <span className="menu-arrow"></span>
                                </NavLink>
                                <ul className="nav-second-level" >
                                    <li><NavLink to="#">Ledger Master</NavLink></li>
                                    <li><NavLink to="#">All Customer</NavLink></li>
                                    <li><NavLink to="#">All Agent</NavLink></li>
                                    <li><NavLink to="#">All Deposit</NavLink></li>
                                    <li><NavLink to="#">All Withdrawal</NavLink></li>
                                    <li><NavLink to="pages-404.html">Staff Performance</NavLink></li>
                                    <li><NavLink to="pages-500.html">Balance Sheet</NavLink></li>
                                </ul>
                            </li>


                            <li>
                                <NavLink to="/">
                                    <i > <MdContentCopy /></i>
                                 
                                    <span> Loan Management </span>
                                    <span className="menu-arrow"></span>
                                </NavLink>
                                <ul className="nav-second-level" >
                                    <li><NavLink to="#">Add Group Loan</NavLink></li>
                                    <li><NavLink to="#">View Group Loan</NavLink></li>
                                    <li><NavLink to="#">Add borrower</NavLink></li>
                                    <li><NavLink to="#">All Loans</NavLink></li>
                                    <li><NavLink to="#">Pending Approval Loan</NavLink></li>
                                    <li><NavLink to="#">Rejected Loan</NavLink></li>
                                    <li><NavLink to="#">Trash Loan</NavLink></li>
                                    <li><NavLink to="#">Pending disbursment</NavLink></li>
                                    <li><NavLink to="#">Ongoing Loan</NavLink></li>
                                    <li><NavLink to="#">Completed Paid Loan</NavLink></li>
                                    <li><NavLink to="#">Due Loan</NavLink></li>
                                    <li><NavLink to="#">Missed Payment</NavLink></li>
                                    <li><NavLink to="#">Written OFF</NavLink></li>
                                    <li><NavLink to="#">Teller Pending Payment</NavLink></li>
                                    <li><NavLink to="#">Teller Payment History</NavLink></li>

                                </ul>
                            </li>


                            {/* <li>
                                <NavLink to="/">
                                    <i > <MdContentCopy /></i>
                                 
                                    <span> History </span>
                                    <span className="menu-arrow"></span>
                                    <span className="badge badge-danger badge-pill float-right">New</span>
                                </NavLink>
                                <ul className="nav-second-level" >
                                    <li><NavLink to="pages-timeline.html">All History</NavLink></li>
                                    <li><NavLink to="pages-invoice.html">Savings</NavLink></li>
                                    <li><NavLink to="pages-pricing.html">Monthly Charges</NavLink></li>
                                    <li><NavLink to="pages-gallery.html">Withdrawal Charges</NavLink></li>
                                    <li><NavLink to="pages-maintenance.html">Loan Savings</NavLink></li>
                                    <li><NavLink to="pages-comingsoon.html">Sms</NavLink></li>
                                    <li><NavLink to="pages-comingsoon.html">Utility</NavLink></li>
                                    <li><NavLink to="pages-comingsoon.html">Expenses</NavLink></li>
                                    <li><NavLink to="pages-comingsoon.html">Withdrawal</NavLink></li>
                                    <li><NavLink to="pages-comingsoon.html">View Insurance</NavLink></li>


                                </ul>
                            </li> */}

                            {/* <li className="menu-title mt-2">Components</li> */}

                            {/* <li>
                                <NavLink to="/">
                                    <i className="mdi mdi-format-underline"></i>
                                    <span> User Interface </span>
                                    <span className="menu-arrow"></span>
                                </NavLink>
                                <ul className="nav-second-level" aria-expanded="false">
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
                                    <i className="mdi mdi-package-variant-closed"></i>
                                    <span> Components </span>
                                    <span className="menu-arrow"></span>
                                </NavLink>
                                <ul className="nav-second-level" aria-expanded="false">
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
                                    <i className="mdi mdi-puzzle-outline"></i>
                                    <span> Widgets </span>
                                    <span className="menu-arrow"></span>
                                </NavLink>
                                <ul className="nav-second-level" aria-expanded="false">
                                    <li><NavLink to="/">Tile Box</NavLink></li>
                                    <li><NavLink to="/">Chart Widgets</NavLink></li>
                                </ul>
                            </li>

                            <li>
                                <NavLink to="/">
                                    <i className="mdi mdi-black-mesa"></i>
                                    <span> Icons </span>
                                    <span className="menu-arrow"></span>
                                </NavLink>
                                <ul className="nav-second-level" aria-expanded="false">
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
                                    <i className="mdi mdi-file-document-box-check-outline"></i>
                                    <span className="badge badge-warning badge-pill float-right">8</span>
                                    <span> Forms </span>
                                </NavLink>
                                <ul className="nav-second-level" aria-expanded="false">
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
                                    <i className="mdi mdi-table-settings"></i>
                                    <span> Tables </span>
                                    <span className="menu-arrow"></span>
                                </NavLink>
                                <ul className="nav-second-level" aria-expanded="false">
                                    <li><NavLink to="tables-basic.html">Basic Tables</NavLink></li>
                                    <li><NavLink to="tables-datatable.html">Data Tables</NavLink></li>
                                    <li><NavLink to="tables-responsive.html">Responsive Table</NavLink></li>
                                    <li><NavLink to="tables-tablesaw.html">Tablesaw</NavLink></li>
                                </ul>
                            </li>

                            <li>
                                <NavLink to="/">
                                    <i className="mdi mdi-poll"></i>
                                    <span> Charts </span>
                                    <span className="menu-arrow"></span>
                                </NavLink>
                                <ul className="nav-second-level" aria-expanded="false">
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

                            <li className="menu-title mt-2">More</li>

                            <li>
                                <NavLink to="/">
                                    <i className="mdi mdi-share-variant"></i>
                                    <span> Multi Level </span>
                                    <span className="menu-arrow"></span>
                                </NavLink>
                                <ul className="nav-second-level nav" aria-expanded="false">
                                    <li>
                                        <NavLink to="/">Level 1.1</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/" aria-expanded="false">Level 1.2
                                            <span className="menu-arrow"></span>
                                        </NavLink>
                                        <ul className="nav-third-level nav" aria-expanded="false">
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

                    <div className="clearfix"></div>

                </div>

            </div>
    </Fragment>
    )
}

export default Sidebar