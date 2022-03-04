import { Fragment } from 'react'
import { Link} from "react-router-dom";
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
                                <Link to="/admin/dashboard">
                                    <i ><MdOutlineDashboard /></i>
                                    
                                    <span> Dashboard </span>
                                </Link>
                                {/* <ul className="nav-second-level" >
                                    <li><Link to="#">Dashboard</Link></li>
                                    <li><Link to="#">Daily History</Link></li>
                                    <li><Link to="#">Report</Link></li>
                                </ul> */}
                            </li>

                            <li>
                                <Link to="#">
                                    <i > <GoCalendar  /> </i>
                                    <span> Customer </span>
                                    <span className="menu-arrow"></span>
                                </Link>
                                <ul className="nav-second-level" >
                                    <li><Link to="/admin/dashboard/newcustomer">New Customer</Link></li>
                                    <li><Link to="/admin/dashboard/allcustomer">All Customers</Link></li>
                                    <li><Link to="/admin/dashboard/withdrawal">Withdraw</Link></li>
                                    <li><Link to="/admin/dashboard/fixedsavings">Fixed Savings</Link></li>
                                    <li><Link to="/admin/dashboard/savings">Normal Savings</Link></li>
                                    {/* <li><Link to="layouts-boxed.html">Delete Customer</Link></li>
                                    <li><Link to="layouts-boxed.html">Customer Details</Link></li>
                                    <li><Link to="layouts-boxed.html">Change Phone</Link></li> */}
                                    {/* <li><Link to="layouts-boxed.html">Normal Savings</Link></li>        */}
                                </ul>
                            </li>
                        
                            <li>
                                <Link to="#">
                                    <i > <GoCalendar  /> </i>
                                    <span> Transactions  </span>
                                    <span className="menu-arrow"></span>
                                </Link>
                                <ul className="nav-second-level" >
                                    <li><Link to="/admin/dashboard/all-deposit">Deposit</Link></li>
                                    <li><Link to="/admin/dashboard/all-withdrawals"> Withdraw</Link></li>
                                    <li><Link to="layouts-small-sidebar.html">Statement of Account</Link></li>
                                    <li><Link to="layouts-sidebar-collapsed.html">My Transaction History</Link></li>
                                    <li><Link to="layouts-unsticky.html">Deposit Reversal</Link></li>
                                    <li><Link to="/admin/dashboard/daily-report">Daily Report</Link></li>
                                </ul>
                            </li>


       

                            <li>
                                <Link to="#">
                                    <i ><MdOutlineSpaceDashboard  /></i>
                                    
                                    <span> Employees </span>
                                    <span className="menu-arrow"></span>
                                    {/* <span className="badge badge-danger badge-pill float-right">New</span> */}
                                </Link>
                                <ul className="nav-second-level" >
                                    <li><Link to="/admin/dashboard/newstaff">New Employee</Link></li>
                                    <li><Link to="/admin/dashboard/allstaff">All Employees</Link></li>
                                    <li><Link to="/admin/dashboard/creditstaff">Credit Employee</Link></li>
                                    <li><Link to="#">Staff Expenses</Link></li>
                                    {/* <li><Link to="layouts-boxed.html">Boxed Layout</Link></li> */}
                                </ul>
                            </li>


                            {/* <li>
                                <Link to="#">
                                    <i > <GoCalendar  /> </i>
                                    <span> Withdrawal </span>
                                    <span className="menu-arrow"></span>
                                </Link>
                                <ul className="nav-second-level" >
                                    <li><Link to="layouts-dark-sidebar.html">Approved Withdrawal</Link></li>
                                    <li><Link to="layouts-small-sidebar.html">Pending Withdrawal</Link></li>
                                    <li><Link to="layouts-sidebar-collapsed.html">Withdraw</Link></li>
                                   
                                </ul>
                            </li> */}

                            <li>
                                <Link to="#">
                                    <i > <GoCalendar  /> </i>
                                    <span> Branch  </span>
                                    <span className="menu-arrow"></span>
                                </Link>
                                <ul className="nav-second-level" >
                                    <li><Link to="/admin/dashboard/branch">Create Branch</Link></li>
                                    <li><Link to="/admin/dashboard/allbranch">All Branches</Link></li>
                                    <li><Link to="/admin/dashboard/trans-history">My Transaction History</Link></li>
                                    <li><Link to="/admin/dashboard/bulk-sms">Send Bulky Sms</Link></li>
                                    <li><Link to="/admin/dashboard/single-sms">Send Single Sms</Link></li>

                                </ul>
                            </li>

                   
                
                            <li>
                                <Link to="#">
                                    <i ><MdPages /></i>
                                    
                                    <span> Accounting </span>
                                    <span className="menu-arrow"></span>
                                </Link>
                                <ul className="nav-second-level" >
                                    <li><Link to="/admin/dashboard/ledger">Ledger Master</Link></li>
                                    <li><Link to="/admin/dashboard/allledger">All Ledger</Link></li>
                                    <li><Link to="/admin/dashboard/history">History</Link></li>
                                    <li><Link to="/admin/dashboard/branch-trans">Branch Transactions</Link></li>
                                    <li><Link to="/admin/dashboard/customers-trans">All Customers</Link></li>
                                    <li><Link to="/admin/dashboard/payroll-report">Payroll Report</Link></li>

                                    {/* <li><Link to="#">All Deposit</Link></li>
                                    <li><Link to="#">All Withdrawal</Link></li>
                                    <li><Link to="pages-404.html">Staff Performance</Link></li>
                                    <li><Link to="pages-500.html">Balance Sheet</Link></li> */}
                                </ul>
                            </li>


                            <li>
                                <Link to="#">
                                    <i > <MdContentCopy /></i>
                                 
                                    <span> Loan </span>
                                    <span className="menu-arrow"></span>
                                </Link>
                                <ul className="nav-second-level" >
                                    <li><Link to="/admin/dashboard/group-loan">Add Group Loan</Link></li>
                                    <li><Link to="/admin/dashboard/all-loan">View Group Loan</Link></li>
                                    <li><Link to="/admin/dashboard/add-loan">Add borrower</Link></li>
                                    <li><Link to="/admin/dashboard/view-loan">All Loans</Link></li>
                                    <li><Link to="/admin/dashboard/pending-loan">Pending Approval Loan</Link></li>
                                    <li><Link to="/admin/dashboard/ongoing-loan">Ongoing Loan</Link></li>
                                    <li><Link to="/admin/dashboard/missed-loan">Missed Payment</Link></li>
                                    <li><Link to="/admin/dashboard/disburse-loan">Disbursed Loan</Link></li>

                                    {/* <li><Link to="#">Rejected Loan</Link></li>
                                    <li><Link to="#">Trash Loan</Link></li>
                                    <li><Link to="#">Pending disbursment</Link></li>
                                    <li><Link to="#">Completed Paid Loan</Link></li>
                                    <li><Link to="#">Due Loan</Link></li>
                                    <li><Link to="#">Written OFF</Link></li>
                                    <li><Link to="#">Teller Pending Payment</Link></li>
                                    <li><Link to="#">Teller Payment History</Link></li> */}

                                </ul>
                            </li>


                            {/* <li>
                                <Link to="/">
                                    <i > <MdContentCopy /></i>
                                 
                                    <span> History </span>
                                    <span className="menu-arrow"></span>
                                    <span className="badge badge-danger badge-pill float-right">New</span>
                                </Link>
                                <ul className="nav-second-level" >
                                    <li><Link to="pages-timeline.html">All History</Link></li>
                                    <li><Link to="pages-invoice.html">Savings</Link></li>
                                    <li><Link to="pages-pricing.html">Monthly Charges</Link></li>
                                    <li><Link to="pages-gallery.html">Withdrawal Charges</Link></li>
                                    <li><Link to="pages-maintenance.html">Loan Savings</Link></li>
                                    <li><Link to="pages-comingsoon.html">Sms</Link></li>
                                    <li><Link to="pages-comingsoon.html">Utility</Link></li>
                                    <li><Link to="pages-comingsoon.html">Expenses</Link></li>
                                    <li><Link to="pages-comingsoon.html">Withdrawal</Link></li>
                                    <li><Link to="pages-comingsoon.html">View Insurance</Link></li>


                                </ul>
                            </li> */}

                            {/* <li className="menu-title mt-2">Components</li> */}

                            {/* <li>
                                <Link to="/">
                                    <i className="mdi mdi-format-underline"></i>
                                    <span> User Interface </span>
                                    <span className="menu-arrow"></span>
                                </Link>
                                <ul className="nav-second-level" aria-expanded="false">
                                    <li><Link to="ui-buttons.html">Buttons</Link></li>
                                    <li><Link to="ui-cards.html">Cards</Link></li>
                                    <li><Link to="ui-dropdowns.html">Dropdowns</Link></li>
                                    <li><Link to="ui-checkbox-radio.html">Checkboxs-Radios</Link></li>
                                    <li><Link to="ui-navs.html">Navs</Link></li>
                                    <li><Link to="ui-progress.html">Progress</Link></li>
                                    <li><Link to="ui-modals.html">Modals</Link></li>
                                    <li><Link to="ui-notification.html">Notification</Link></li>
                                    <li><Link to="ui-alerts.html">Alerts</Link></li>
                                    <li><Link to="ui-carousel.html">Carousel</Link></li>
                                    <li><Link to="ui-bootstrap.html">Bootstrap UI</Link></li>
                                    <li><Link to="ui-typography.html">Typography</Link></li>
                                </ul>
                            </li>

                            <li>
                                <Link to="/">
                                    <i className="mdi mdi-package-variant-closed"></i>
                                    <span> Components </span>
                                    <span className="menu-arrow"></span>
                                </Link>
                                <ul className="nav-second-level" aria-expanded="false">
                                    <li><Link to="components-grid.html">Grid</Link></li>
                                    <li><Link to="components-range-sliders.html">Range sliders</Link></li>
                                    <li><Link to="components-sweet-alert.html">Sweet Alerts</Link></li>
                                    <li><Link to="components-ratings.html">Ratings</Link></li>
                                    <li><Link to="components-treeview.html">Treeview</Link></li>
                                    <li><Link to="components-tour.html">Tour</Link></li>
                                </ul>
                            </li>

                            <li>
                                <Link to="/">
                                    <i className="mdi mdi-puzzle-outline"></i>
                                    <span> Widgets </span>
                                    <span className="menu-arrow"></span>
                                </Link>
                                <ul className="nav-second-level" aria-expanded="false">
                                    <li><Link to="/">Tile Box</Link></li>
                                    <li><Link to="/">Chart Widgets</Link></li>
                                </ul>
                            </li>

                            <li>
                                <Link to="/">
                                    <i className="mdi mdi-black-mesa"></i>
                                    <span> Icons </span>
                                    <span className="menu-arrow"></span>
                                </Link>
                                <ul className="nav-second-level" aria-expanded="false">
                                    <li><Link to="icons-materialdesign.html">Material Design</Link></li>
                                    <li><Link to="icons-ionicons.html">Ion Icons</Link></li>
                                    <li><Link to="icons-fontawesome.html">Font awesome</Link></li>
                                    <li><Link to="icons-themify.html">Themify Icons</Link></li>
                                    <li><Link to="icons-simple-line.html">Simple line Icons</Link></li>
                                    <li><Link to="icons-weather.html">Weather Icons</Link></li>
                                    <li><Link to="icons-pe7.html">PE7 Icons</Link></li>
                                    <li><Link to="icons-typicons.html">Typicons</Link></li>
                                </ul>
                            </li>

                            <li>
                                <Link to="/">
                                    <i className="mdi mdi-file-document-box-check-outline"></i>
                                    <span className="badge badge-warning badge-pill float-right">8</span>
                                    <span> Forms </span>
                                </Link>
                                <ul className="nav-second-level" aria-expanded="false">
                                    <li><Link to="form-elements.html">General Elements</Link></li>
                                    <li><Link to="form-advanced.html">Advanced Form</Link></li>
                                    <li><Link to="form-validation.html">Form Validation</Link></li>
                                    <li><Link to="form-pickers.html">Form Pickers</Link></li>
                                    <li><Link to="form-wizard.html">Form Wizard</Link></li>
                                    <li><Link to="form-mask.html">Form Masks</Link></li>
                                    <li><Link to="form-uploads.html">Multiple File Upload</Link></li>
                                    <li><Link to="form-xeditable.html">X-editable</Link></li>
                                </ul>
                            </li>

                            <li>
                                <Link to="/">
                                    <i className="mdi mdi-table-settings"></i>
                                    <span> Tables </span>
                                    <span className="menu-arrow"></span>
                                </Link>
                                <ul className="nav-second-level" aria-expanded="false">
                                    <li><Link to="tables-basic.html">Basic Tables</Link></li>
                                    <li><Link to="tables-datatable.html">Data Tables</Link></li>
                                    <li><Link to="tables-responsive.html">Responsive Table</Link></li>
                                    <li><Link to="tables-tablesaw.html">Tablesaw</Link></li>
                                </ul>
                            </li>

                            <li>
                                <Link to="/">
                                    <i className="mdi mdi-poll"></i>
                                    <span> Charts </span>
                                    <span className="menu-arrow"></span>
                                </Link>
                                <ul className="nav-second-level" aria-expanded="false">
                                    <li><Link to="charts-flot.html">Flot Charts</Link></li>
                                    <li><Link to="charts-morris.html">Morris Charts</Link></li>
                                    <li><Link to="charts-chartjs.html">Chartjs</Link></li>
                                    <li><Link to="charts-peity.html">Peity Charts</Link></li>
                                    <li><Link to="charts-chartist.html">Chartist Charts</Link></li>
                                    <li><Link to="charts-c3.html">C3 Charts</Link></li>
                                    <li><Link to="charts-sparkline.html">Sparkline Charts</Link></li>
                                    <li><Link to="charts-knob.html">Jquery Knob</Link></li>
                                </ul>
                            </li>

                            <li className="menu-title mt-2">More</li>

                            <li>
                                <Link to="/">
                                    <i className="mdi mdi-share-variant"></i>
                                    <span> Multi Level </span>
                                    <span className="menu-arrow"></span>
                                </Link>
                                <ul className="nav-second-level nav" aria-expanded="false">
                                    <li>
                                        <Link to="/">Level 1.1</Link>
                                    </li>
                                    <li>
                                        <Link to="/" aria-expanded="false">Level 1.2
                                            <span className="menu-arrow"></span>
                                        </Link>
                                        <ul className="nav-third-level nav" aria-expanded="false">
                                            <li>
                                                <Link to="/">Level 2.1</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Level 2.2</Link>
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
