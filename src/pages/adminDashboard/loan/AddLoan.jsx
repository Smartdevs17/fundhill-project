import { Fragment } from 'react'
import { Link } from "react-router-dom";

function AddLoan() {
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
                                    <li className="breadcrumb-item active">Group</li>
                                </ol>
                                </div>
                                <h4 className="page-title">Add Loan Loan</h4>
                            </div>
                            </div>
                        </div>     
    
                        {/* end page title */} 
                        
                        <div className="row">
                            <div className="col-12">
                            <div className="card-box">
                                <h4 className="header-title">All Members</h4>
                                <p className="sub-header">
                                DataTables has most features enabled by default, so all you need to do to use it with your own tables is to call the construction function: <code>$().DataTable();</code>.
                                </p>
                                <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
                                <thead>
                                    <tr>
                                    <th>Cust-ID</th>
                                    <th> Full Name </th>
                                    <th> A/C </th>
                                    <th> Email </th>
                                    <th> Phone </th>
                                    <th> Date Joined </th>
                                    <th> Personal </th>
                                    <th> Group(Batch) </th>
                                    <th> Action </th>
       
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>Cust-1</td>
                                    <td>John Doe</td>
                                    <td>123456789</td>
                                    <td>johndoe@gmail.com</td>
                                    <td>0804569837</td>
                                    <td>12 Dec 2021</td>
                                    <td>True</td>
                                    <td>Angwan Mado</td>
                                    <td>View</td>
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

export default AddLoan