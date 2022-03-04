import {Fragment} from 'react'
import { Link} from "react-router-dom";



function DayReport() {
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
                                    <li className="breadcrumb-item active">Report</li>
                                  </ol>
                                </div>
                                <h4 className="page-title">Daily Report</h4>
                              </div>
                            </div>
                          </div>     
                          {/* end page title */} 
                          <div className="row">
                            <div className="col-md-6 col-xl-3">
                              <div className="card-box tilebox-one">
                                <i className="icon-layers float-right m-0 h2 text-muted" />
                                <h6 className="text-muted text-uppercase mt-0">Total Savings Balance</h6>
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
                                <h6 className="text-muted text-uppercase mt-0">Total Deposit</h6>
                                <h3 className="my-3">#<span data-plugin="counterup">155,990</span></h3>
                                <span className="badge badge-pink mr-1"> 0% </span> <span className="text-muted">See more</span>
                              </div>
                            </div>
                            <div className="col-md-6 col-xl-3">
                              <div className="card-box tilebox-one">
                                <i className="icon-rocket float-right m-0 h2 text-muted" />
                                <h6 className="text-muted text-uppercase mt-0">All Savings Accounts</h6>
                                <h3 className="my-3" data-plugin="counterup">2,500</h3>
                                <span className="badge badge-warning mr-1"> +89% </span> <span className="text-muted">See more</span>
                              </div>
                            </div>
                            <div className="col-md-6 col-xl-3">
                              <div className="card-box tilebox-one">
                                <i className="icon-rocket float-right m-0 h2 text-muted" />
                                <h6 className="text-muted text-uppercase mt-0">No. Clients With Savings Accounts</h6>
                                <h3 className="my-3" data-plugin="counterup">42,760</h3>
                                <span className="badge badge-warning mr-1"> +89% </span> <span className="text-muted">Last year</span>
                              </div>
                            </div>
                            <div className="col-md-6 col-xl-3">
                              <div className="card-box tilebox-one">
                                <i className="icon-rocket float-right m-0 h2 text-muted" />
                                <h6 className="text-muted text-uppercase mt-0">Total Interest </h6>
                                <h3 className="my-3">#<span data-plugin="counterup">143,00</span></h3>
                                <span className="badge badge-warning mr-1"> +89% </span> <span className="text-muted">See more</span>
                              </div>
                            </div> 
                            
                              <div className="col-md-6 col-xl-3">
                              <div className="card-box tilebox-one">
                                <i className="icon-rocket float-right m-0 h2 text-muted" />
                                <h6 className="text-muted text-uppercase mt-0">Total Fees</h6>
                                <h3 className="my-3">#<span data-plugin="counterup">90,722</span></h3>
                                <span className="badge badge-warning mr-1"> +89% </span> <span className="text-muted">Last year</span>
                              </div>
                            </div> 
    
                             {/* <div className="col-md-6 col-xl-3">
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
                            </div> */}
    
    
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

export default DayReport