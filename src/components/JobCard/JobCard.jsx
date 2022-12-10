import React from 'react';
import dot from "../../assets/images/icon/3dot.png";
import eye from "../../assets/images/icon/action/eye-bold.svg";
import share from "../../assets/images/icon/action/share.svg";
import jobIcon from "../../assets/images/icon/Job.svg";
import calendar from "../../assets/images/icon/calendar.svg";
import bag from "../../assets/images/icon/bag.svg";
import meetup from "../../assets/images/meetup.png";
import joseph from "../../assets/images/joseph.png";

const JobCard = () => {
    return (
      <div className="card mt-5">
        <div className="card-body p-4">
          <img className="mb-3" src={jobIcon} alt="" />
          <div className="d-flex justify-content-between">
            <h2 className="">Software Developer</h2>
            <span>
              <img src={dot} alt="" />
            </span>
          </div>
          <div className="d-flex justify-content-start gap-5 my-3">
            <span className="h5">
              <img src={bag} alt="" /> Innovaccer Analytics Private Ltd.
            </span>
            <span className="h5">
              <img src={calendar} alt="" /> Noida, India
            </span>
          </div>
          <button className="btn btn-outline  text-success rounded border w-100 my-3 py-2">
            Apply on Timesjobs
          </button>
          <div className="d-flex justify-content-between">
            <div className="d-flex content-align-center align-items-center gap-2">
              <img src={joseph} alt="" />
              <span className="h5">Joseph Gray</span>
            </div>
            <div className="d-flex content-align-center align-items-center gap-2">
              <img src={eye} alt="" />
              <span className="lead">1.4 K Views</span>
              <img src={share} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default JobCard;