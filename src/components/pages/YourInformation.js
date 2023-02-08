import React from "react";
import DatePick from "../common/Datepicker";
import Layout from "../common/Layout";
import TimePicker from "../common/TimePicker";
import Doctor from "../doctor/Doctor";
import ClinicType from "../form-elements/ClinicType";
import Steps from "../Steps";
import exImg from '../../img/ex.svg';
import FormInfo from "../form-elements/Form";
import { Link } from "react-router-dom";

export default function BookAppoinment() {
  return (
    <div className="book-apoinment">
      <Layout>
        <div className="container">
          <div className="inner-nav">
          <Steps />
          <Link to='/' className="btn-link">Back</Link> 
          </div>

          <Doctor />
          <div className="card-grid">
            <div className="note-wrap">
             <label>Personal Information</label>
              <small className="note mt-0">
                Please note that we are having limited<br/>intakes for physical clinic at
                the moment
              </small>
            </div>
            <div className="form-wrap">
              <FormInfo/>
            </div>
          </div>
          <div className="btn-group-row">
          <Link to="/" className="btn btn-sec">
            Previous
            </Link>
            <button className="btn btn-primary">
              Continue
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
}
