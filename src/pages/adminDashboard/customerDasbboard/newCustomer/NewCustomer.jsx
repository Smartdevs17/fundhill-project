import { Fragment } from 'react'
import { Link } from "react-router-dom";
import "./newcustomer.css"

function NewCustomer() {
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
                            <label htmlFor="example-search-input" className="col-lg-2 col-form-label">Profile Photo</label>
                                <div className="col-lg-10">
                                    <input type="file" className="dropify" data-default-file="/assets/images/small/img-1.jpg" />
                                </div>
                            </div>

                            <div className="form-group row">
                            <label htmlFor="example-search-input" className="col-lg-2 col-form-label">ID </label>
                                <div className="col-lg-10">
                                    <input type="file" className="dropify" data-default-file="/assets/images/small/img-1.jpg" />
                                </div>
                            </div>

                            <div className="form-group row">
                            <label htmlFor="example-search-input" className="col-lg-2 col-form-label">Utility Bill</label>
                                <div className="col-lg-10">
                                    <input type="file" className="dropify" data-default-file="/assets/images/small/img-1.jpg" />
                                </div>
                            </div>

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
                        <label htmlFor="example-tel-input" className="col-lg-2 col-form-label">Choose One</label>
                        <div className="col-lg-10">
                            <select className="form-control" data-toggle="select2">
                                    <option>Select Savings Plan</option>
                                        <option value="Savings">Savings</option>
                                        <option value="fixed">Fixed Deposit</option>
                                        <option value="loan">Loan</option>
                                </select>
                        </div>
                           
                        </div>
                

               
                        <div className="form-group row">
                        <label htmlFor="example-tel-input" className="col-lg-2 col-form-label">Choose Staff</label>
                        <div className="col-lg-10">
                            <select className="form-control" data-toggle="select2">
                                    <option>Select One</option>
                                        <option value="Savings">Staff 1</option>
                                        <option value="fixed">Staff 2</option>
                                        <option value="loan">Staff 3</option>
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

export default NewCustomer