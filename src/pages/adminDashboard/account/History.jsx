import { Fragment } from 'react'
import { Link } from "react-router-dom";

function History() {
  return (
    <Fragment>



<div className='content-page'>
        <div className="content">
                     {/* Start Content*/}
                     <div className="container-fluid">
                    {/* start page title */}
                    <div className="row">
                        <div className="col-12">
                        <div className="page-title-box">
                            <div className="page-title-right">
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><Link to="#">FundHill</Link ></li>
                                <li className="breadcrumb-item"><Link to="#">Admin</Link ></li>
                                <li className="breadcrumb-item active">Account</li>
                            </ol>
                            </div>
                            <h4 className="page-title">Add New History</h4>
                        </div>
                        </div>
                    </div>     
                    {/* end page title */} 


                    <div className="form-group row">
                            <label htmlFor="example-text-input" className="col-lg-2 col-form-label">New Loan Customer</label>
                            <div className="col-lg-10">
                                <input className="form-control" type="text" placeholder="#0" id="example-text-input" />
                            </div>
                            </div>

                            <div className="form-group row">
                            <label htmlFor="example-text-input" className="col-lg-2 col-form-label">New Savings Customer</label>
                            <div className="col-lg-10">
                                <input className="form-control" type="text" placeholder="#0" id="example-text-input" />
                            </div>
                            </div>

                            <div className="form-group row">
                            <label htmlFor="example-text-input" className="col-lg-2 col-form-label">Total Savings</label>
                            <div className="col-lg-10">
                                <input className="form-control" type="text" placeholder="#0" id="example-text-input" />
                            </div>
                            </div>

                            <div className="form-group row">
                            <label htmlFor="example-text-input" className="col-lg-2 col-form-label">Total Monthly Charge</label>
                            <div className="col-lg-10">
                                <input className="form-control" type="text" placeholder="#0" id="example-text-input" />
                            </div>
                            </div>

                            <div className="form-group row">
                            <label htmlFor="example-text-input" className="col-lg-2 col-form-label">Total Withdraw Charge</label>
                            <div className="col-lg-10">
                                <input className="form-control" type="text" placeholder="#" id="example-text-input" />
                            </div>
                            </div>

                            <div className="form-group row">
                            <label htmlFor="example-text-input" className="col-lg-2 col-form-label">Loan Min Disbursment</label>
                            <div className="col-lg-10">
                                <input className="form-control" type="text" placeholder="#0" id="example-text-input" />
                            </div>
                            </div>

                            <div className="form-group row">
                            <label htmlFor="example-text-input" className="col-lg-2 col-form-label">Loan Insurance</label>
                            <div className="col-lg-10">
                                <input className="form-control" type="text" placeholder="#0" id="example-text-input" />
                            </div>
                            </div>

                            <div className="form-group row">
                            <label htmlFor="example-text-input" className="col-lg-2 col-form-label">Total Loan Savings</label>
                            <div className="col-lg-10">
                                <input className="form-control" type="text" placeholder="#0" id="example-text-input" />
                            </div>
                            </div>

                            <div className="form-group row">
                            <label htmlFor="example-text-input" className="col-lg-2 col-form-label">Total Loan Repayment</label>
                            <div className="col-lg-10">
                                <input className="form-control" type="text" placeholder="#0" id="example-text-input" />
                            </div>
                            </div>

                            <div className="form-group row">
                            <label htmlFor="example-text-input" className="col-lg-2 col-form-label">Today Total Collection</label>
                            <div className="col-lg-10">
                                <input className="form-control" type="text" placeholder="#0" id="example-text-input" />
                            </div>
                            </div>

                            <div className="form-group row">
                            <label htmlFor="example-text-input" className="col-lg-2 col-form-label">Today Total Withdrawal</label>
                            <div className="col-lg-10">
                                <input className="form-control" type="text" placeholder="#0" id="example-text-input" />
                            </div>
                            </div>

                            <div className="form-group row">
                            <label htmlFor="example-text-input" className="col-lg-2 col-form-label">Total Expenses</label>
                            <div className="col-lg-10">
                                <input className="form-control" type="text" placeholder="#0" id="example-text-input" />
                            </div>
                            </div>

                            <div className="form-group row">
                            <label htmlFor="example-text-input" className="col-lg-2 col-form-label">Closing Balance</label>
                            <div className="col-lg-10">
                                <input className="form-control" type="text" placeholder="#0" id="example-text-input" />
                            </div>
                            </div>

                            <div className="row">
                            <div className="col-12">
                            <div className="card-box">
                                <h4 className="header-title">Staff Enteries</h4>
                                <p className="sub-header">
                                DataTables has most features enabled by default, so all you need to do to use it with your own tables is to call the construction function: <code>$().DataTable();</code>.
                                </p>
                                <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
                                <thead>
                                    <tr>
                                    <th>ID</th>
                                    <th>Agent Name </th>
                                    <th>Customer Name</th>
                                    <th>Branch</th>
                                    <th>Amount</th>
                                    <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>1</td>
                                    <td>Agent 1</td>
                                    <td>Customer 1</td>
                                    <td>Farin Gada Branch</td>
                                    <td>#100</td>
                                    <td>Deposit</td>
                                    </tr>
            
                                </tbody>
                                </table>
                            </div>
                            </div>
                        </div> 
                        {/* end row */}
                  


                    {/* end row */}
                    </div> 
                    {/* end container-fluid */}

            </div>
           
        </div>
                            


    </Fragment>
  )
}

export default History