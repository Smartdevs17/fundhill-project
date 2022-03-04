import {Fragment} from 'react'
import { Link} from "react-router-dom"

function CustomersTrans() {
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
                                    <li className="breadcrumb-item active">Account</li>
                                </ol>
                                </div>
                                <h4 className="page-title">All Customers</h4>
                            </div>
                            </div>
                        </div>     
    
                        {/* end page title */} 

                        <div className="row">
                            <div className="col-12">
                                <div className="card-box">
                                    <h4 className="header-title mb-4">Search Customer</h4>
                                    <form action="">

                                    <div className="form-group row">
                                    <label htmlFor="example-text-input" className="col-lg-2 col-form-label">Search</label>
                                    <div className="col-lg-10">
                                        <input className="form-control" type="text"  id="example-text-input" />
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
                                <h4 className="header-title">All Customers</h4>
                                <p className="sub-header">
                                DataTables has most features enabled by default, so all you need to do to use it with your own tables is to call the construction function: <code>$().DataTable();</code>.
                                </p>
                                <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
                                <thead>
                                    <tr>
                                    <th>S/N</th>
                                    <th>Full Name</th>
                                    <th>Account Number </th>
                                    <th>Username</th>
                                    <th>Phone Number</th>
                                    <th>Account Type </th>
                                    <th>Balance</th>
                                    <th>Branch</th>
                                    <th>Last Seen</th>
                                    <th>Session</th>
                                    <th>Reg Date</th>
                                    <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
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

export default CustomersTrans