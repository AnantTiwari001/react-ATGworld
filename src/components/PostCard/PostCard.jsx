import React from 'react';
import dot from "../../assets/images/icon/3dot.png";
import eye from "../../assets/images/icon/action/eye-bold.svg";
import share from "../../assets/images/icon/action/share.svg";
const PostCard = ({ post }) => {
    console.log(post);
    return (
      <div className="card mt-5">
        <img src={post.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <img className="mb-3" src={post.catIcon} alt="" />
          <div className="d-flex justify-content-between">
            <h2 className="">
             {post.title}
            </h2>
            <span>
              <img src={dot} alt="" />
            </span>
          </div>
          <p className="card-text">
            I’ve worked in UX for the better part of a decade. From now on, I
            plan to rei…
          </p>
          <div className="d-flex justify-content-between">
              <div className="d-flex content-align-center align-items-center gap-2">
                <img src={post.authorImg} alt="" />
                        <span className="h5">{post.author}</span>
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

export default PostCard;