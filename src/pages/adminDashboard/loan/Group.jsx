import { Fragment } from 'react'
import { Link } from "react-router-dom";

function Group() {
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
                                <li className="breadcrumb-item active">Loan</li>
                            </ol>
                            </div>
                            <h4 className="page-title">Add New Group</h4>
                        </div>
                        </div>
                    </div>     
                    {/* end page title */} 



                    <div className="row">
                        <div className="col-12">
                        <div className="card-box">
                            <h4 className="header-title mb-4">New Group Loan</h4>
                            <form action="">

                            <div className="form-group row">
                            <label htmlFor="example-tel-input" className="col-lg-2 col-form-label">Branch</label>
                            <div className="col-lg-10">
                                <select className="form-control" data-toggle="select2">
                                        <option>Select Branch</option>
                                            <option value="Savings">Branch 1</option>
                                            <option value="fixed">Branch 2</option>
                                            <option value="loan">Branch 3</option>
                                    </select>
                            </div>
                            
                            </div>

                            <div className="form-group row">
                            <label htmlFor="example-tel-input" className="col-lg-2 col-form-label">Loan Officer</label>
                            <div className="col-lg-10">
                                <select className="form-control" data-toggle="select2">
                                        <option>Choose Staff</option>
                                            <option value="Savings">Staff 1</option>
                                            <option value="fixed">Staff 2</option>
                                            <option value="loan">Staff 3</option>
                                    </select>
                            </div>
                            
                            </div>

                            <div className="form-group row">
                            <label htmlFor="example-text-input" className="col-lg-2 col-form-label">Group Name</label>
                            <div className="col-lg-10">
                                <input className="form-control" type="text"  id="example-text-input" />
                            </div>
                            </div>

                            <div className="form-group row">
                            <label htmlFor="example-search-input" className="col-lg-2 col-form-label">Repayment Date</label>
                            <div className="col-lg-10">
                                <input className="form-control" type="date" id="example-search-input" />
                            </div>
                            </div>

                            <div className="form-group row">
                            <label htmlFor="example-tel-input" className="col-lg-2 col-form-label">Category</label>
                            <div className="col-lg-10">
                                <select className="form-control" data-toggle="select2">
                                        <option>Select One</option>
                                            <option value="Savings">Flat </option>
                                            <option value="fixed">Reducing Balance</option>
                                    </select>
                            </div>
                            
                            </div>
                    
                            
                            <div className="form-group row">
                            <label htmlFor="example-tel-input" className="col-lg-2 col-form-label">Loan Product</label>
                            <div className="col-lg-10">
                                <select className="form-control" data-toggle="select2">
                                        <option>Select </option>
                                            <option value="Savings">Product 1</option>
                                            <option value="fixed">Product 2</option>
                                            <option value="loan">Product 3</option>
                                    </select>
                            </div>
                            
                            </div>


                            <div className="form-group row">
                            <label htmlFor="example-url-input" className="col-lg-2 col-form-label">Loan Amount</label>
                            <div className="col-lg-10">
                                <input className="form-control" type="number" placeholder="500000" id="example-url-input" />
                            </div>
                            </div>



                            <div className="form-group row">
                            <label htmlFor="example-tel-input" className="col-lg-2 col-form-label">Loan Period</label>
                            <div className="col-lg-10">
                                <select className="form-control" data-toggle="select2">
                                        <option>Select One</option>
                                            <option value="Savings">Daily</option>
                                            <option value="fixed">Weekly</option>
                                            <option value="biweekly">Biweekly</option>
                                            <option value="loan">Monthly</option>
                                    </select>
                            </div>
                            
                            </div>


                        <div className="form-group row">
                        <label htmlFor="example-tel-input" className="col-lg-2 col-form-label">Payment Schedule</label>
                        <div className="col-lg-10">
                            <select className="form-control" data-toggle="select2">
                                    <option>Select One</option>
                                        <option value="Savings">Manuel Payment</option>
                                        <option value="fixed">System auto Debit</option>
                                </select>
                        </div>
                           
                        </div>
                

                        <button type="submit" className="btn btn-primary btn-block">Submit</button>

 

                        </form>

                        <div className="form-group row">

                        </div>
                        </div>
                        </div>
                    </div>


                  


                    {/* end row */}
                    </div> 
                    {/* end container-fluid */}

            </div>
           
        </div>
            
        </Fragment>
    )
}

export default Group