import React from "react";
import DatePick from "../common/Datepicker";
import Layout from "../common/Layout";
import TimePicker from "../common/TimePicker";
import Doctor from "../doctor/Doctor";
import ClinicType from "../form-elements/ClinicType";
import Steps from "../Steps";
import exImg from '../../img/ex.svg';

export default function BookAppoinment() {
  return (
    <div className="book-apoinment">
      <Layout>
        <div className="container">
          <Steps />
          <Doctor />
          <div className="card-grid">
            <div className="note-wrap">
              <ClinicType />
              <small className="note">
                <img src={exImg} alt="" />
                Please note that we are having limited intakes for physical clinic at
                the moment
              </small>
            </div>
            <div className="card-wrap">
              <DatePick />
              <TimePicker />
            </div>
          </div>
          <div className="btn-group">
            <button className="btn btn-primary">
              Continue
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
}
