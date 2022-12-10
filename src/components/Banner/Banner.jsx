import React from 'react';
import banner from '../../assets/images/engineeringBanner.png';
import rightArrow from '../../assets/images/icon/navigation/backArrow.svg';
const Banner = () => {
    return (
      <div>
        <div
          className=" text-center bg-image position-relative"
          style={{
            backgroundImage: `url(${banner})`,
            height: "440px",
          }}
        >
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", height: "100%" }}
          >
            <div className="d-md-none d-flex justify-content-between mx-5 pt-5">
              <img src={rightArrow} alt="" />
              <button
                className="btn text-white border"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#modalBox"
              >
                Join Group
              </button>
            </div>
            <div
              className="d-flex position-absolute"
              style={{ bottom: "50px", left: "20%" }}
            >
              <div className="text-white align-text-left">
                <h1 className="mb-1 h3 fw-bold">Computer Engineering</h1>
                <h4 className="mb-3 h6 fw-light m-0 text-start">
                  142,765 Computer engineers follow this
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;