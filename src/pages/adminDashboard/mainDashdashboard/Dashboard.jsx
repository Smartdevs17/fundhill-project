import {Fragment} from 'react'
import { Link} from "react-router-dom";
import "./Dashboard.css"

function Dashboard() {
  return (
    
    <Fragment>

                  <div className="content-page">
                  <div className="content">
                    {/* Start Content*/}
                    <div className="container-fluid">
                      {/* start page title */}
                      <div className="row">
                        <div className="col-12">
                          <div className="page-title-box">
                            <div className="page-title-right">
                              <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><Link to="#">FundHill</Link></li>
                                <li className="breadcrumb-item active">Dashboard</li>
                              </ol>
                            </div>
                            <h4 className="page-title">Dashboard</h4>
                          </div>
                        </div>
                      </div>     
                      {/* end page title */} 
                      <div className="row">
                        <div className="col-md-6 col-xl-3">
                          <div className="card-box tilebox-one">
                            <i className="icon-layers float-right m-0 h2 text-muted" />
                            <h6 className="text-muted text-uppercase mt-0">Total Deposit</h6>
                            <h3 className="my-3">#<span data-plugin="counterup">67,545</span></h3>
                            <span className="badge badge-success mr-1"> +11% </span> <span className="text-muted">See more</span>
                          </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                          <div className="card-box tilebox-one">
                            <i className="icon-paypal float-right m-0 h2 text-muted" />
                            <h6 className="text-muted text-uppercase mt-0">Total WithDrawals</h6>
                            <h3 className="my-3">#<span data-plugin="counterup">46,782</span></h3>
                            <span className="badge badge-danger mr-1"> -29% </span> <span className="text-muted">See more</span>
                          </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                          <div className="card-box tilebox-one">
                            <i className="icon-chart float-right m-0 h2 text-muted" />
                            <h6 className="text-muted text-uppercase mt-0">Total Loans</h6>
                            <h3 className="my-3">#<span data-plugin="counterup">155,990</span></h3>
                            <span className="badge badge-pink mr-1"> 0% </span> <span className="text-muted">See more</span>
                          </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                          <div className="card-box tilebox-one">
                            <i className="icon-rocket float-right m-0 h2 text-muted" />
                            <h6 className="text-muted text-uppercase mt-0">All Staff</h6>
                            <h3 className="my-3" data-plugin="counterup">2,500</h3>
                            <span className="badge badge-warning mr-1"> +89% </span> <span className="text-muted">See more</span>
                          </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                          <div className="card-box tilebox-one">
                            <i className="icon-rocket float-right m-0 h2 text-muted" />
                            <h6 className="text-muted text-uppercase mt-0">All Customer</h6>
                            <h3 className="my-3" data-plugin="counterup">42,760</h3>
                            <span className="badge badge-warning mr-1"> +89% </span> <span className="text-muted">Last year</span>
                          </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                          <div className="card-box tilebox-one">
                            <i className="icon-rocket float-right m-0 h2 text-muted" />
                            <h6 className="text-muted text-uppercase mt-0">Total Expenditure</h6>
                            <h3 className="my-3" data-plugin="counterup">#1,890</h3>
                            <span className="badge badge-warning mr-1"> +89% </span> <span className="text-muted">See more</span>
                          </div>
                        </div> 
                        
                          <div className="col-md-6 col-xl-3">
                          <div className="card-box tilebox-one">
                            <i className="icon-rocket float-right m-0 h2 text-muted" />
                            <h6 className="text-muted text-uppercase mt-0">Unpaid Loan</h6>
                            <h3 className="my-3">#<span data-plugin="counterup">90,722</span></h3>
                            <span className="badge badge-warning mr-1"> +89% </span> <span className="text-muted">Last year</span>
                          </div>
                        </div> 

                         <div className="col-md-6 col-xl-3">
                          <div className="card-box tilebox-one">
                            <i className="icon-rocket float-right m-0 h2 text-muted" />
                            <h6 className="text-muted text-uppercase mt-0">Total MFI</h6>
                            <h3 className="my-3" data-plugin="counterup">19</h3>
                            <span className="badge badge-warning mr-1"> +89% </span> <span className="text-muted">Last year</span>
                          </div>
                        </div>  

                         <div className="col-md-6 col-xl-3">
                          <div className="card-box tilebox-one">
                            <i className="icon-rocket float-right m-0 h2 text-muted" />
                            <h6 className="text-muted text-uppercase mt-0">Product Sold</h6>
                            <h3 className="my-3" data-plugin="counterup">6,780</h3>
                            <span className="badge badge-warning mr-1"> +89% </span> <span className="text-muted">Last year</span>
                          </div>   
                        </div>   
                        
                        <div className="col-md-6 col-xl-3">
                          <div className="card-box tilebox-one">
                            <i className="icon-rocket float-right m-0 h2 text-muted" />
                            <h6 className="text-muted text-uppercase mt-0">Total fixed Savings</h6>
                            <h3 className="my-3" data-plugin="counterup">56,897</h3>
                            <span className="badge badge-warning mr-1"> +89% </span> <span className="text-muted">Last year</span>
                          </div>
                        </div>

                        <div className="col-md-6 col-xl-3">
                          <div className="card-box tilebox-one">
                            <i className="icon-rocket float-right m-0 h2 text-muted" />
                            <h6 className="text-muted text-uppercase mt-0">Total Branch</h6>
                            <h3 className="my-3" data-plugin="counterup">300</h3>
                            <span className="badge badge-warning mr-1"> +89% </span> <span className="text-muted">Last year</span>
                          </div>
                        </div>

                        <div className="col-md-6 col-xl-3">
                          <div className="card-box tilebox-one">
                            <i className="icon-rocket float-right m-0 h2 text-muted" />
                            <h6 className="text-muted text-uppercase mt-0">Loan Interest</h6>
                            <h3 className="my-3" data-plugin="counterup">1,560</h3>
                            <span className="badge badge-warning mr-1"> +89% </span> <span className="text-muted">Last year</span>
                          </div>
                        </div>


                      </div>
                      {/* end row */}




                      {/* end row */}
                      <div className="row">
                        <div className="col-xl-7">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="card-box">
                                <h4 className="header-title mb-3">Inbox</h4>
                                <div className="inbox-widget slimscroll" style={{maxHeight: 324}}>
                                  <Link to="#">
                                    <div className="inbox-item">
                                      <div className="inbox-item-img"><img src="/assets/images/users/avatar-1.jpg" className="rounded-circle" alt="" /></div>
                                      <p className="inbox-item-author">Chadengle</p>
                                      <p className="inbox-item-text">Hey! there I'm available...</p>
                                      <p className="inbox-item-date">13:40 PM</p>
                                    </div>
                                  </Link>
                                  <Link to="#">
                                    <div className="inbox-item">
                                      <div className="inbox-item-img"><img src="/assets/images/users/avatar-2.jpg" className="rounded-circle" alt="" /></div>
                                      <p className="inbox-item-author">Tomaslau</p>
                                      <p className="inbox-item-text text-truncate">I've finished it! See you so...</p>
                                      <p className="inbox-item-date">13:34 PM</p>
                                    </div>
                                  </Link>
                                  <Link to="#">
                                    <div className="inbox-item">
                                      <div className="inbox-item-img"><img src="/assets/images/users/avatar-3.jpg" className="rounded-circle" alt="" /></div>
                                      <p className="inbox-item-author">Stillnotdavid</p>
                                      <p className="inbox-item-text">This theme is awesome!</p>
                                      <p className="inbox-item-date">13:17 PM</p>
                                    </div>
                                  </Link>
                                  <Link to="#">
                                    <div className="inbox-item">
                                      <div className="inbox-item-img"><img src="assets/images/users/avatar-4.jpg" className="rounded-circle" alt="" /></div>
                                      <p className="inbox-item-author">Kurafire</p>
                                      <p className="inbox-item-text">Nice to meet you</p>
                                      <p className="inbox-item-date">12:20 PM</p>
                                    </div>
                                  </Link>
                                  <Link to="#">
                                    <div className="inbox-item">
                                      <div className="inbox-item-img"><img src="assets/images/users/avatar-5.jpg" className="rounded-circle" alt="" /></div>
                                      <p className="inbox-item-author">Shahedk</p>
                                      <p className="inbox-item-text">Hey! there I'm available...</p>
                                      <p className="inbox-item-date">10:15 AM</p>
                                    </div>
                                  </Link>
                           
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="card-box">
                                <h4 className="header-title mb-3">Sales Statistics</h4>
                                <p className="font-weight-semibold mb-3">iMacs <span className="text-danger float-right"><b>78%</b></span></p>
                                <div className="progress" style={{height: 10}}>
                                  <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: '78%'}} aria-valuenow={78} aria-valuemin={0} aria-valuemax={78} />
                                </div>
                              </div>
                              <div className="card-box">
                                <h4 className="header-title mb-3">Monthly Sales</h4>
                                <p className="font-weight-semibold mb-2">Macbooks <span className="text-success float-right"><b>25%</b></span></p>
                                <div className="progress" style={{height: 10}}>
                                  <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                              </div>
                              <div className="card-box">
                                <h4 className="header-title mb-3">Daily Sales</h4>
                                <p className="font-weight-semibold mb-2">Mobiles <span className="text-warning float-right"><b>75%</b></span></p>
                                <div className="progress" style={{height: 10}}>
                                  <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* end col*/}
                        <div className="col-xl-5">
                          <div className="card-box">
                            <h4 className="header-title mb-3">Top Contracts MFIs</h4>
                            <div className="table-responsive">
                              <table className="table table-bordered table-nowrap mb-0">
                                <thead>
                                  <tr>
                                    <th>Company</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Status</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th className="text-muted">Apple Technology</th>
                                    <td>20/02/2014</td>
                                    <td>19/02/2020</td>
                                    <td><span className="badge badge-success">Paid</span></td>
                                  </tr>
                                  <tr>
                                    <th className="text-muted">Envato Pty Ltd.</th>
                                    <td>20/02/2014</td>
                                    <td>19/02/2020</td>
                                    <td><span className="badge badge-danger">Unpaid</span></td>
                                  </tr>
                                  <tr>
                                    <th className="text-muted">Dribbble LLC.</th>
                                    <td>20/02/2014</td>
                                    <td>19/02/2020</td>
                                    <td><span className="badge badge-success">Paid</span></td>
                                  </tr>
                                  <tr>
                                    <th className="text-muted">Adobe Family</th>
                                    <td>20/02/2014</td>
                                    <td>19/02/2020</td>
                                    <td><span className="badge badge-success">Paid</span></td>
                                  </tr>
                                  <tr>
                                    <th className="text-muted">Apple Technology</th>
                                    <td>20/02/2014</td>
                                    <td>19/02/2020</td>
                                    <td><span className="badge badge-danger">Unpaid</span></td>
                                  </tr>
                                  <tr>
                                    <th className="text-muted">Envato Pty Ltd.</th>
                                    <td>20/02/2014</td>
                                    <td>19/02/2020</td>
                                    <td><span className="badge badge-success">Paid</span></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        {/* end col*/}
                      </div>
                      {/* end row */}
                    </div>
                     {/* end container-fluid */}
                  </div>
                   {/* end content */}
 
                  </div>
                 

              

    </Fragment>
    
  )
}

export default Dashboard