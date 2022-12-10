import React from 'react';
import dot from "../../assets/images/icon/3dot.png";
import eye from "../../assets/images/icon/action/eye-bold.svg";
import share from "../../assets/images/icon/action/share.svg";
import meetIcon from "../../assets/images/icon/Meetup.svg";
import calendar from "../../assets/images/icon/calendar.svg";
import location from "../../assets/images/icon/location.svg";
import meetup from "../../assets/images/meetup.png";
import ronal from "../../assets/images/ronal.png";

const EventCard = () => {
    return (
      <div className="card mt-5">
        <img src={meetup} className="card-img-top" alt="..." />
        <div className="card-body p-4">
          <img className="mb-3" src={meetIcon} alt="" />
          <div className="d-flex justify-content-between">
            <h2 className="">
              Finance & Investment Elite Social Mixer @Lujiazui
            </h2>
            <span>
              <img src={dot} alt="" />
            </span>
          </div>
          <div className="d-flex justify-content-start gap-5 my-3">
            <span className="h5">
              <img src={calendar} alt="" /> Fri, 12 Oct, 2018
            </span>
            <span className="h5">
              <img src={location} alt="" /> Ahmedabad, India
            </span>
          </div>
          <button className="btn btn-outline  text-danger rounded border w-100 my-3 py-2">
            Visit Website
          </button>
          <div className="d-flex justify-content-between">
            <div className="d-flex content-align-center align-items-center gap-2">
              <img src={ronal} alt="" />
              <span className="h5">Ronal Jones</span>
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

export default EventCard;