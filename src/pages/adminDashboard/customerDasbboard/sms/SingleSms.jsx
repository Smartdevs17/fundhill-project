import { Fragment } from 'react'
import { Link } from "react-router-dom";


function SingleSms() {
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
                                <li className="breadcrumb-item active">Customers</li>
                            </ol>
                            </div>
                            <h4 className="page-title">Send SMS to All Customers</h4>
                        </div>
                        </div>
                    </div>     
                    {/* end page title */} 



                    <div className="row">
                        <div className="col-12">
                        <div className="card-box">
                            <h4 className="header-title mb-4">Send SMS</h4>
                            <form action="">

                            <div className="form-group row">
                            <label htmlFor="example-tel-input" className="col-lg-2 col-form-label">Select Reciever</label>
                            <div className="col-lg-10">
                                <select className="form-control" data-toggle="select2">
                                        <option>Select Customers</option>
                                            <option value="Savings">Customer 1</option>
                                            <option value="fixed">Customer 2</option>
                                            <option value="loan">Customer 3</option>
                                    </select>
                            </div>
                            
                            </div>


                            <div className="form-group row">
                            <label htmlFor="example-text-input" className="col-lg-2 col-form-label">Subject</label>
                            <div className="col-lg-10">
                                <input className="form-control" placeholder="Enter Subject" type="text"  id="example-text-input" />
                            </div>
                            </div>


                            <div className="form-group row">
                            <label htmlFor="example-text-input" className="col-lg-2 col-form-label">Message Content</label>
                            <div className="col-lg-10">
                                <textarea className="form-control" placeholder="Enter Message Here" type="text"  id="example-text-input" />
                            </div>
                            </div>


  

                        <button type="submit" className="btn btn-primary btn-block">Send</button>

 

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

export default SingleSms