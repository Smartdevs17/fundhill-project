import {Fragment} from 'react'
import { Link } from "react-router-dom"

function Ledger() {
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
                            <h4 className="page-title">Add New Ledger</h4>
                        </div>
                        </div>
                    </div>     
                    {/* end page title */} 




      <div className="form-group row">
        <label htmlFor="example-text-input" className="col-lg-2 col-form-label">
          Ledger Name
        </label>
        <div className="col-lg-10">
          <input
            className="form-control"
            type="text"
            id="example-text-input"
          />
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="example-tel-input" className="col-lg-2 col-form-label">
          Group Name
        </label>
        <div className="col-lg-10">
          <select className="form-control" data-toggle="select2">
            <option>Capital Account Liability</option>
            <option value="Savings">Savings</option>
            <option value="fixed">Fixed Deposit</option>
            <option value="loan">Loan</option>
          </select>
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="example-text-input" className="col-lg-2 col-form-label">
          Opening Balance
        </label>
        <div className="col-lg-10">
          <input
            className="form-control"
            type="text"
            id="example-text-input"
          />
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="example-text-input" className="col-lg-2 col-form-label">
          Opening Date
        </label>
        <div className="col-lg-10">
          <input
            className="form-control"
            type="text"
            id="example-text-input"
          />
        </div>
      </div>
                  


                    {/* end row */}
                    </div> 
                    {/* end container-fluid */}

            </div>
           
        </div>



    </Fragment>
  );
}

export default Ledger