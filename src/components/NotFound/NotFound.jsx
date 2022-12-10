import React from 'react';
import { Link } from 'react-router-dom';
import notFound from "../../assets/images/404.jpg";
const NotFound = () => {
  //seting title
  // UseTitle('Not Found');
    return (
      <div className="">
        <div className="">
          <img className="" src={notFound} alt="" />
          <img className="" src={notFound} alt="" />
          <img className="" src={notFound} alt="" />
        </div>
        <div className="">
          <div className="">
            <h1 className="">
              Looks like you've found the doorway to the great nothing
            </h1>
            <p className="">
              The content you’re looking for doesn’t exist. Either it was
              removed, or you mistyped the link.
            </p>
            <p className="">
              Sorry about that! Please visit our hompage to get where you need
              to go.
            </p>
          </div>
          <Link
            to="/"
            className=""
          >
            Go back to Homepage
          </Link>
        </div>
      </div>
    );
};

export default NotFound;