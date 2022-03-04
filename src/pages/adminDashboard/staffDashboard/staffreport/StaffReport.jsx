import { Fragment } from 'react'
import { Link } from "react-router-dom";

function StaffReport() {
    return (
        <Fragment>
            {/* Start Page Content here */}
                    {/* ============================================================== */}
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
                                    <li className="breadcrumb-item"><Link to="#">Admin</Link></li>
                                    <li className="breadcrumb-item active">Report</li>
                                </ol>
                                </div>
                                <h4 className="page-title">Staff Performance</h4>
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
                                            Branch
                                        </label>
                                        <div className="col-lg-10">
                                            <select
                                            className="form-control"
                                            data-toggle="select2"
                                            >
                                            <option>Select Branch</option>
                                            <option value="Savings">Branch 1</option>
                                            <option value="fixed">Branch 2</option>
                                            <option value="loan">Branch 3</option>
                                            </select>
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
                                            <option>Select Staff</option>
                                            <option value="Savings">Staff 1</option>
                                            <option value="fixed">Staff2</option>
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
                            <div className="col-12">
                            <div className="card-box">
                                <h4 className="header-title">Account Balance Report</h4>
                                <p className="sub-header">
                               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam quos natus rerum ducimus deleniti odio at? Exercitationem neque cupiditate cumque incidunt, officia nisi laborum omnis.
                                </p>
                                <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
                                <thead>
                                    <tr>
                                    <th> Branch </th>
                                    <th> Loan Officer</th>
                                    <th> No. of Clients </th>
                                    <th> Client with Loan </th>
                                    <th> Principal </th>
                                    <th> Interest% </th>
                                    <th> Total Outstanding </th>
                                    <th> Disbursed </th>
                                    <th> Dsibursed Amt </th>
                                    <th> Write OFF </th>
                                    <th> Off Amt </th>
                                    <th> Total Principal </th>
                                    <th> Input% </th>
                                    <th> Status </th>
       
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
                        </div>
                        
                        </div>
    
        </Fragment>
      )
}

export default StaffReport