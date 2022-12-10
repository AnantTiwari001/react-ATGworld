import React from 'react';
import eye from "../../assets/images/icon/action/eye_outlined.svg";
import login from "../../assets/images/icon/atg_illustration.svg";
import f_logo from "../../assets/images/icon/f_logo.svg";
import g_logo from "../../assets/images/icon/g_logo.svg";
import close from "../../assets/images/icon/Vector.svg";
const SignIn = () => {
  return (
    <div
      className="modal fade"
      id="modalBox"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      
      <div className="modal-dialog modal-dialog-centered modal-xl d-md-none">
        <div className="modal-content">
          <div className="modal-header p-0 border-0">
            <div class="alert alert-success w-100">
              <p className="text-success text-center h5">
                Let's learn, share & inspire each other with our passion for
                computer engineering. Sign up now 🤘🏼
              </p>
            </div>

            <img
              className=""
              style={{
                position: "absolute",
                right: "-30px",
                top: "-30px",
                zIndex: "1000",
              }}
              data-bs-dismiss="modal"
              aria-label="Close"
              src={close}
              alt=""
            />
          </div>
          <div class="modal-body">
            <section className="">
              <div className="container py-5 h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">
                  <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                    <p className="h3 mb-4">Sing In</p>
                    <form>
                      <div className="form-outline">
                        <input
                          type="email"
                          id="form1Example13"
                          placeholder="Email"
                          className="form-control form-control-lg  py-3 m-0 rounded-0 "
                        />
                      </div>

                      <div className="form-outline position-relative">
                        <input
                          type="password"
                          id="form1Example23"
                          placeholder="Password"
                          className="form-control form-control-lg py-3 m-0 rounded-0 mb-3"
                        />
                        <img
                          className=""
                          src={eye}
                          alt=""
                          style={{
                            position: "absolute",
                            top: "20px",
                            right: "25px",
                            width: "25px",
                            height: "25px",
                          }}
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary btn-lg btn-block w-100 rounded-pill py-3 my-4"
                      >
                        Sing In
                      </button>

                      <a
                        className="btn  btn-lg  w-100 border py-3 my-2 h5 mt-3"
                        href="#!"
                        role="button"
                      >
                        <img
                          style={{ width: "20px", height: "25px" }}
                          src={f_logo}
                          alt=""
                        />{" "}
                        Continue with Facebook
                      </a>
                      <a
                        className="btn  btn-lg  w-100 border py-3 my-2 h5"
                        href="#!"
                        role="button"
                      >
                        <img
                          style={{ width: "20px", height: "25px" }}
                          src={g_logo}
                          alt=""
                        />
                        Continue with Google
                      </a>
                    </form>
                  </div>
                  <div className="col-md-8 col-lg-7 col-xl-6">
                    <p className="text-right d-flex justify-content-end h5 align-items-center">
                      {" "}
                      Don't Have Account?{" "}
                      <span
                        className="h4 text-primary ms-2"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#modalBox2"
                      >
                        Create new for free
                      </span>
                    </p>

                    <img  src={login} className="img-fluid w-100 d-none d-lg-block" alt="" />
                  </div>
                </div>
              </div>
            </section>
            {/* <SignIn></SignIn> */}
          </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default SignIn;