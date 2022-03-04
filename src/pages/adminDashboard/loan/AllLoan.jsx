import { Fragment } from 'react'
import { Link } from "react-router-dom";


function AllLoan() {
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
                                <h4 className="page-title">Group Loan</h4>
                            </div>
                            </div>
                        </div>     
    
                        {/* end page title */} 
                        
                        <div className="row">
                            <div className="col-12">
                            <div className="card-box">
                                <h4 className="header-title">All Group Loan</h4>
                                <p className="sub-header">
                                DataTables has most features enabled by default, so all you need to do to use it with your own tables is to call the construction function: <code>$().DataTable();</code>.
                                </p>
                                <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
                                <thead>
                                    <tr>
                                    <th> ID</th>
                                    <th> Group</th>
                                    <th> Principal </th>
                                    <th> Account No. </th>
                                    <th> Interest </th>
                                    <th> Balance </th>
                                    <th> Approved Date </th>
                                    <th> 1st Payment </th>
                                    <th> Plan </th>
                                    <th> Status </th>
                                    <th> Payment Status </th>
                                    <th> Action </th>
       
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>GL-1</td>
                                    <td>Kwarafa Comperative</td>
                                    <td>1234567889</td>
                                    <td>#1200000</td>
                                    <td>2%</td>
                                    <td>#50000</td>
                                    <td>2 Jan 2022</td>
                                    <td> #20000</td>
                                    <td>weekly</td>
                                    <td>uncleared</td>
                                    <td>system auto debit</td>
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

export default AllLoan