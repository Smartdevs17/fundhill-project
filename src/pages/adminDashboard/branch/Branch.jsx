import {Fragment} from 'react'
import { Link } from "react-router-dom";

function Branch() {
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
                                    <li className="breadcrumb-item active">New Branch</li>
                                </ol>
                                </div>
                                <h4 className="page-title">Add New Branch</h4>
                            </div>
                            </div>
                        </div>     
                        {/* end page title */} 
    
    
    
                        <div className="row">
                            <div className="col-12">
                            <div className="card-box">
                                <h4 className="header-title mb-4">New Branch</h4>
                                <form action="">
    
    
    
                            {/* <div className="form-group row">
                            <label htmlFor="example-tel-input" className="col-lg-2 col-form-label">Choose Staff</label>
                            <div className="col-lg-10">
                                <select className="form-control" data-toggle="select2">
                                        <option>Select One</option>
                                            <option value="Savings">Staff 1</option>
                                            <option value="fixed">Staff 2</option>
                                            <option value="loan">Staff 3</option>
                                    </select>
                            </div>          
                            </div> */}

                            <div className="form-group row">
                                <label htmlFor="example-text-input" className="col-lg-2 col-form-label">Branch ID</label>
                                <div className="col-lg-10">
                                    <input className="form-control" type="text"  id="example-text-input" />
                                </div>
                            </div>


                            <div className="form-group row">
                                <label htmlFor="example-text-input" className="col-lg-2 col-form-label">Branch Name</label>
                                <div className="col-lg-10">
                                    <input className="form-control" type="text" id="example-text-input" />
                                </div>
                            </div>


    
                            <div className="form-group row">
                            <label htmlFor="example-tel-input" className="col-lg-2 col-form-label">Branch Head</label>
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
                                <label htmlFor="example-text-input" className="col-lg-2 col-form-label">Branch Adress</label>
                                <div className="col-lg-10">
                                    <input className="form-control" type="text"  id="example-text-input" />
                                </div>
                            </div>
                    
    
                            <div className="form-group row">
                                <label htmlFor="example-text-input" className="col-lg-2 col-form-label">Branch Number</label>
                                <div className="col-lg-10">
                                    <input className="form-control" type="text"  id="example-text-input" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="example-text-input" className="col-lg-2 col-form-label">Creatd At</label>
                                <div className="col-lg-10">
                                    <input className="form-control" type="date"  id="example-text-input" />
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

export default Branch