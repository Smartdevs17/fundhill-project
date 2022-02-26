import { Fragment } from 'react'
import { NavLink } from "react-router-dom";
import "./newcustomer.css"

function NewCustomer() {
  return (
        <Fragment>
            <div className="content">
                     {/* Start Content*/}
                     <div className="container-fluid">
                    {/* start page title */}
                    <div className="row">
                        <div className="col-12">
                        <div className="page-title-box">
                            <div className="page-title-right">
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><NavLink to="#">FundHill</NavLink ></li>
                                <li className="breadcrumb-item"><NavLink to="#">Forms</NavLink ></li>
                                <li className="breadcrumb-item active">New Customer</li>
                            </ol>
                            </div>
                            <h4 className="page-title">Add New Customer</h4>
                        </div>
                        </div>
                    </div>     
                    {/* end page title */} 



                    <div className="row">
                        <div className="col-12">
                        <div className="card-box">
                            <h4 className="header-title mb-4">New Customer</h4>
                            <form action="">

                            <div className="form-group row">
                            <label htmlFor="example-text-input" className="col-lg-2 col-form-label">First Name</label>
                            <div className="col-lg-10">
                                <input className="form-control" type="text" placeholder="John" id="example-text-input" />
                            </div>
                            </div>
                            <div className="form-group row">
                            <label htmlFor="example-search-input" className="col-lg-2 col-form-label">Middle Name</label>
                            <div className="col-lg-10">
                                <input className="form-control" type="text" placeholder="Mikel" id="example-search-input" />
                            </div>
                            </div>
                            <div className="form-group row">
                            <label htmlFor="example-search-input" className="col-lg-2 col-form-label">Last Name</label>
                            <div className="col-lg-10">
                                <input className="form-control" type="text" placeholder="Doe" id="example-search-input" />
                            </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-10">
                                    <div className="card-box">
                                    <h4 className="header-title mb-4">Passport Photo</h4>
                                    <input type="file" className="dropify" data-default-file="/assets/images/small/img-1.jpg" />
                                    </div>
                                </div>
                                {/* end col */}                           
                                </div>
                                {/* end row */}

                            <div className="form-group row">
                            <label htmlFor="example-search-input" className="col-lg-2 col-form-label">BVN</label>
                            <div className="col-lg-10">
                                <input className="form-control" type="number" placeholder="10 digit number" id="example-search-input" />
                            </div>
                            </div>
                            <div className="form-group row">
                            <label htmlFor="example-email-input" className="col-lg-2 col-form-label">Email</label>
                            <div className="col-lg-10">
                                <input className="form-control" type="email" placeholder="smartdeveloper@yahoo.com" id="example-email-input" />
                            </div>
                            </div>
                            <div className="form-group row">
                            <label htmlFor="example-url-input" className="col-lg-2 col-form-label">Residential Address</label>
                            <div className="col-lg-10">
                                <input className="form-control" type="text" placeholder="Tudun Wada" id="example-url-input" />
                            </div>
                            </div>
                            <div className="form-group row">
                            <label htmlFor="example-url-input" className="col-lg-2 col-form-label">Business Address</label>
                            <div className="col-lg-10">
                                <input className="form-control" type="text" placeholder="Hwolshe" id="example-url-input" />
                            </div>
                            </div>
                            <div className="form-group row">
                            <label htmlFor="example-tel-input" className="col-lg-2 col-form-label">Telephone Number</label>
                            <div className="col-lg-10">
                                <input className="form-control" type="tel" placeholder="234-(222)-333-4445" id="example-tel-input" />
                            </div>
                            </div>

                        <div className="form-group row">
                            <select className="form-control" data-toggle="select2">
                                <option>Choose One</option>
                                <optgroup label="savings plan">
                                    <option value="Savings">Savings</option>
                                    <option value="fixed">Fixed Deposit</option>
                                    <option value="loan">Loan</option>
                                </optgroup>                         
                            </select>
                        </div>
                

                        <div className="form-group row">
                            <select className="form-control" data-toggle="select2">
                                <option>Select</option>
                                <optgroup label="Staff">
                                    <option value="Savings">Agent 1</option>
                                    <option value="fixed">Agent 2</option>
                                    <option value="loan">Agent 3</option>
                                </optgroup>                         
                            </select>
                        </div>
                        
                    
                        <button type="submit" className="btn btn-primary btn-block">Submit</button>

                        </form>

                        </div>
                        </div>
                    </div>


                  


                    {/* end row */}
                    </div> 
                    {/* end container-fluid */}

            </div>
           
        </Fragment>
    )
}

export default NewCustomer