import { Fragment } from 'react'
import { NavLink} from "react-router-dom";


function Content() {
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
                      <li className="breadcrumb-item"><NavLink to="#">Uplon</NavLink></li>
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
                  <h6 className="text-muted text-uppercase mt-0">Orders</h6>
                  <h3 className="my-3" data-plugin="counterup">1,587</h3>
                  <span className="badge badge-success mr-1"> +11% </span> <span className="text-muted">From previous period</span>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="card-box tilebox-one">
                  <i className="icon-paypal float-right m-0 h2 text-muted" />
                  <h6 className="text-muted text-uppercase mt-0">Revenue</h6>
                  <h3 className="my-3">$<span data-plugin="counterup">46,782</span></h3>
                  <span className="badge badge-danger mr-1"> -29% </span> <span className="text-muted">From previous period</span>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="card-box tilebox-one">
                  <i className="icon-chart float-right m-0 h2 text-muted" />
                  <h6 className="text-muted text-uppercase mt-0">Average Price</h6>
                  <h3 className="my-3">$<span data-plugin="counterup">15.9</span></h3>
                  <span className="badge badge-pink mr-1"> 0% </span> <span className="text-muted">From previous period</span>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="card-box tilebox-one">
                  <i className="icon-rocket float-right m-0 h2 text-muted" />
                  <h6 className="text-muted text-uppercase mt-0">Product Sold</h6>
                  <h3 className="my-3" data-plugin="counterup">1,890</h3>
                  <span className="badge badge-warning mr-1"> +89% </span> <span className="text-muted">Last year</span>
                </div>
              </div>
            </div>
            {/* end row */}
            <div className="row">
              <div className="col-lg-6 col-xl-8">
                <div className="card-box">
                  <h4 className="header-title mb-3">Sales Statistics</h4>
                  <div className="text-center">
                    <ul className="list-inline chart-detail-list mb-0">
                      <li className="list-inline-item">
                        <h6 className="text-info"><i className="mdi mdi-circle-outline mr-1" />Series A</h6>
                      </li>
                      <li className="list-inline-item">
                        <h6 className="text-success"><i className="mdi mdi-triangle-outline mr-1" />Series B</h6>
                      </li>
                      <li className="list-inline-item">
                        <h6 className="text-muted"><i className="mdi mdi-square-outline mr-1" />Series C</h6>
                      </li>
                    </ul>
                  </div>
                  <div id="morris-bar-stacked" className="morris-chart" style={{height: 320}} />
                </div>
              </div>{/* end col*/}
              <div className="col-lg-6 col-xl-4">
                <div className="card-box">
                  <h4 className="header-title mb-3">Trends Monthly</h4>
                  <div className="text-center mb-3">
                    <div className="btn-group" role="group" aria-label="Basic example">
                      <button type="button" className="btn btn-sm btn-secondary">Today</button>
                      <button type="button" className="btn btn-sm btn-secondary">This Week</button>
                      <button type="button" className="btn btn-sm btn-secondary">Last Week</button>
                    </div>
                  </div>
                  <div id="morris-donut-example" className="morris-chart" style={{height: 268}} />
                  <div className="text-center">
                    <ul className="list-inline chart-detail-list mb-0 mt-2">
                      <li className="list-inline-item">
                        <h6 className="text-info"><i className="mdi mdi-circle-outline mr-1" />English</h6>
                      </li>
                      <li className="list-inline-item">
                        <h6 className="text-success"><i className="mdi mdi-triangle-outline mr-1" />Italian</h6>
                      </li>
                      <li className="list-inline-item">
                        <h6 className="text-muted"><i className="mdi mdi-square-outline mr-1" />French</h6>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>{/* end col*/}
            </div>
            {/* end row */}
            <div className="row">
              <div className="col-xl-7">
                <div className="row">
                  <div className="col-md-6">
                    <div className="card-box">
                      <h4 className="header-title mb-3">Inbox</h4>
                      <div className="inbox-widget slimscroll" style={{maxHeight: 324}}>
                        <NavLink to="#">
                          <div className="inbox-item">
                            <div className="inbox-item-img"><img src="/assets/images/users/avatar-1.jpg" className="rounded-circle" alt="" /></div>
                            <p className="inbox-item-author">Chadengle</p>
                            <p className="inbox-item-text">Hey! there I'm available...</p>
                            <p className="inbox-item-date">13:40 PM</p>
                          </div>
                        </NavLink>
                        <NavLink to="#">
                          <div className="inbox-item">
                            <div className="inbox-item-img"><img src="/assets/images/users/avatar-2.jpg" className="rounded-circle" alt="" /></div>
                            <p className="inbox-item-author">Tomaslau</p>
                            <p className="inbox-item-text text-truncate">I've finished it! See you so...</p>
                            <p className="inbox-item-date">13:34 PM</p>
                          </div>
                        </NavLink>
                        <NavLink to="#">
                          <div className="inbox-item">
                            <div className="inbox-item-img"><img src="/assets/images/users/avatar-3.jpg" className="rounded-circle" alt="" /></div>
                            <p className="inbox-item-author">Stillnotdavid</p>
                            <p className="inbox-item-text">This theme is awesome!</p>
                            <p className="inbox-item-date">13:17 PM</p>
                          </div>
                        </NavLink>
                        <NavLink to="#">
                          <div className="inbox-item">
                            <div className="inbox-item-img"><img src="assets/images/users/avatar-4.jpg" className="rounded-circle" alt="" /></div>
                            <p className="inbox-item-author">Kurafire</p>
                            <p className="inbox-item-text">Nice to meet you</p>
                            <p className="inbox-item-date">12:20 PM</p>
                          </div>
                        </NavLink>
                        <NavLink to="#">
                          <div className="inbox-item">
                            <div className="inbox-item-img"><img src="assets/images/users/avatar-5.jpg" className="rounded-circle" alt="" /></div>
                            <p className="inbox-item-author">Shahedk</p>
                            <p className="inbox-item-text">Hey! there I'm available...</p>
                            <p className="inbox-item-date">10:15 AM</p>
                          </div>
                        </NavLink>
                        <NavLink to="#">
                          <div className="inbox-item">
                            <div className="inbox-item-img"><img src="/assets/images/users/avatar-6.jpg" className="rounded-circle" alt="" /></div>
                            <p className="inbox-item-author">Adhamdannaway</p>
                            <p className="inbox-item-text">This theme is awesome!</p>
                            <p className="inbox-item-date">9:56 AM</p>
                          </div>
                        </NavLink>
                        <NavLink to="#">
                          <div className="inbox-item">
                            <div className="inbox-item-img"><img src="/assets/images/users/avatar-8.jpg" className="rounded-circle" alt="" /></div>
                            <p className="inbox-item-author">Arashasghari</p>
                            <p className="inbox-item-text">Hey! there I'm available...</p>
                            <p className="inbox-item-date">10:15 AM</p>
                          </div>
                        </NavLink>
                        <NavLink to="#">
                          <div className="inbox-item">
                            <div className="inbox-item-img"><img src="/assets/images/users/avatar-9.jpg" className="rounded-circle" alt="" /></div>
                            <p className="inbox-item-author">Joshaustin</p>
                            <p className="inbox-item-text">I've finished it! See you so...</p>
                            <p className="inbox-item-date">9:56 AM</p>
                          </div>
                        </NavLink>
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
              </div>{/* end col*/}
              <div className="col-xl-5">
                <div className="card-box">
                  <h4 className="header-title mb-3">Top Contracts</h4>
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
              </div>{/* end col*/}
            </div>
            {/* end row */}
          </div> {/* end container-fluid */}
        </div> {/* end content */}


        {/* Footer Start */}
        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                2022 ©  theme by <NavLink to='#'>Smart Developers</NavLink>
              </div>
            </div>
          </div>
        </footer>
        {/* end Footer */}
      </div>

</Fragment>
    )
}

export default Content