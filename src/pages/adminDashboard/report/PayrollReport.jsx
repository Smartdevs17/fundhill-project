import {Fragment} from 'react'
import { Link} from "react-router-dom";

function PayrollReport() {
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
                                <h4 className="page-title">Payroll Report</h4>
                              </div>
                            </div>
                          </div>     
                          {/* end page title */} 




                          <div className="row">
                            <div className="col-12">
                                <div className="card-box">
                                    <h4 className="header-title mb-4">Search Date Transaction</h4>
                                    <form action="">

                                    <div className="form-group row">
                                    <label htmlFor="example-text-input" className="col-lg-2 col-form-label">From</label>
                                    <div className="col-lg-10">
                                        <input className="form-control" type="date"  id="example-text-input" />
                                    </div>
                                    </div>

                                    <div className="form-group row">
                                    <label htmlFor="example-search-input" className="col-lg-2 col-form-label">To</label>
                                    <div className="col-lg-10">
                                        <input className="form-control" type="date" id="example-search-input" />
                                    </div>
                                    </div>

                    
                                    <div className="form-group row">
                                        <label
                                            htmlFor="example-tel-input"
                                            className="col-lg-2 col-form-label"
                                        >
                                            Staff
                                        </label>
                                        <div className="col-lg-10">
                                            <select
                                            className="form-control"
                                            data-toggle="select2"
                                            >
                                            <option>All Staff</option>
                                            <option value="Savings">Staff 1</option>
                                            <option value="fixed">Staff 2</option>
                                            <option value="loan">Staff 3</option>
                                            </select>
                                        </div>
                                        </div>


                                <button type="submit" className="btn btn-primary btn-block">Search</button>
                                </form>

                                </div>
                            </div>
                        </div>


                          <div className="row">
                            <div className="col-md-6 col-xl-3">
                              <div className="card-box tilebox-one">
                                <i className="icon-layers float-right m-0 h2 text-muted" />
                                <h6 className="text-muted text-uppercase mt-0">Total Gross Amount</h6>
                                <h3 className="my-3">#<span data-plugin="counterup">0</span></h3>
                                <span className="badge badge-success mr-1"> +11% </span> <span className="text-muted">See more</span>
                              </div>
                            </div>
                            <div className="col-md-6 col-xl-3">
                              <div className="card-box tilebox-one">
                                <i className="icon-paypal float-right m-0 h2 text-muted" />
                                <h6 className="text-muted text-uppercase mt-0">Total Deduction Amount</h6>
                                <h3 className="my-3">#<span data-plugin="counterup">46,782</span></h3>
                                <span className="badge badge-danger mr-1"> -29% </span> <span className="text-muted">See more</span>
                              </div>
                            </div>
                            <div className="col-md-6 col-xl-3">
                              <div className="card-box tilebox-one">
                                <i className="icon-chart float-right m-0 h2 text-muted" />
                                <h6 className="text-muted text-uppercase mt-0">Total Net Amount</h6>
                                <h3 className="my-3">#<span data-plugin="counterup">155,990</span></h3>
                                <span className="badge badge-pink mr-1"> 0% </span> <span className="text-muted">See more</span>
                              </div>
                            </div>
                            <div className="col-md-6 col-xl-3">
                              <div className="card-box tilebox-one">
                                <i className="icon-rocket float-right m-0 h2 text-muted" />
                                <h6 className="text-muted text-uppercase mt-0">Total Paid Amount</h6>
                                <h3 className="my-3">#<span data-plugin="counterup">0</span></h3>
                                <span className="badge badge-warning mr-1"> +89% </span> <span className="text-muted">See more</span>
                              </div>
                            </div>
                            

                            <div className="row">
                            <div className="col-12">
                            <div className="card-box">
                                {/* <h4 className="header-title">Deposit Statment</h4>
                                <p className="sub-header">
                               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam quos natus rerum ducimus deleniti odio at? Exercitationem neque cupiditate cumque incidunt, officia nisi laborum omnis.
                                </p> */}
                                <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
                                <thead>
                                    <tr>
                                    <th> Pay Date </th>
                                    <th> Staff </th>
                                    <th> Pay Period </th>
                                    <th> Gross </th>
                                    <th> Deductions </th>
                                    <th> Net </th>
                                    <th> Paid </th>
                                    <th> Recurring </th>
                                    <th> Payslip </th>
                                    <th> Action </th>
       
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    {/* <td>1</td>
                                    <td>Gen Bubu</td>
                                    <td>#1200000</td>
                                    <td>1234567889</td>
                                    <td>L-1</td>
                                    <td>Group</td>
                                    <td>4 Oct 2022</td>
                                    <td>Manul</td>
                                    <td>View</td> */}
                                    <td>  </td>
                                    <td>  </td>
                                    <td>  </td>
                                    <td>  </td>
                                    <td>  </td>
                                    <td>  </td>
                                    <td>  </td>
                                    <td>  </td>
                                    <td>  </td>
                                    <td>  </td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                            </div>
                        </div> {/* end row */}




    
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

export default PayrollReport