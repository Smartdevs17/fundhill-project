import {Fragment} from 'react'
import { Link } from "react-router-dom";


function CreditStaff() {
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
                            <div className="form-group row">
                            <label htmlFor="example-text-input" className="col-lg-2 col-form-label">Amount</label>
                            <div className="col-lg-10">
                                <input className="form-control" type="text" placeholder="#15000" id="example-text-input" />
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

export default CreditStaff