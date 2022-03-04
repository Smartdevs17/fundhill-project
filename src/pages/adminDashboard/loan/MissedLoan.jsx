import { Fragment } from 'react'
import { Link } from "react-router-dom";

function MissedLoan() {
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
                                    <li className="breadcrumb-item active">Loan</li>
                                </ol>
                                </div>
                                <h4 className="page-title">Missed Payment</h4>
                            </div>
                            </div>
                        </div>     
    
                        {/* end page title */} 
                        
                        <div className="row">
                            <div className="col-12">
                            <div className="card-box">
                                <h4 className="header-title">All Ongoing Loans</h4>
                                <p className="sub-header">
                                DataTables has most features enabled by default, so all you need to do to use it with your own tables is to call the construction function: <code>$().DataTable();</code>.
                                </p>
                                <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
                                <thead>
                                    <tr>
                                    <th> ID</th>
                                    <th> Full Names</th>
                                    <th> Amount + interest </th>
                                    <th> Account No. </th>
                                    <th> Balance </th>
                                    <th> Disbursed Date </th>
                                    <th> 1st repayment </th>
                                    <th> Status </th>
                                    <th> Payment Status </th>
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
                        </div>
                        
                        </div>
    
        </Fragment>
      )
}

export default MissedLoan