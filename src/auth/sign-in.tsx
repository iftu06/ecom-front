import React from "react";
import SocialIcons from "../theme/SocialIcons";

const SignIn = (props: any) => {
  return <React.Fragment>

    <div className="page-content">
      <div className="form-v1-content">
        <div className="wizard-form">
          <form className="form-register" action="#" method="post">
            <div id="form-total" role="application" className="wizard clearfix vertical">
              <div className="steps clearfix">
                <ul role="tablist">
                  <li role="tab" aria-disabled="false" className="first current" aria-selected="true">
                    <a id="form-total-t-0" href="#form-total-h-0" aria-controls="form-total-p-0">
                      <span className="current-info audible"> </span>
                      <div className="title">
                        <p className="step-icon"><span><i className="fa-solid fa-user-plus"></i></span></p>
                        <span className="step-text">SIGN UP</span>
                      </div>
                    </a>
                  </li>
                  <li role="tab" aria-disabled="false" className="done" aria-selected="false">
                    <a id="form-total-t-1" href="#form-total-h-1" aria-controls="form-total-p-1">
                      <div className="title">
                        <p className="step-icon"><span><i className="fa-solid fa-right-to-bracket"></i></span></p>
                        <span className="step-text">SIGN IN</span>
                      </div></a></li><li role="tab" aria-disabled="false" className="last done" aria-selected="false"><a id="form-total-t-2" href="#form-total-h-2" aria-controls="form-total-p-2"><div className="title">
                        <p className="step-icon"><span><i className="fa-solid fa-key"></i></span></p>
                        <span className="step-text">FORGET PASSWORD</span>
                      </div>
                      </a>
                  </li>
                </ul>
              </div>
              <div className="content clearfix">
                {/* SECTION 1  */}
                <h2 id="form-total-h-0" tabIndex={-1} className="title current">
                  <p className="step-icon"><span><i className="fa-solid fa-user-plus"></i></span></p>
                  <span className="step-text">SIGN UP</span>
                </h2>
                <section id="form-total-p-0" role="tabpanel" aria-labelledby="form-total-h-0" className="body current" aria-hidden="false" style={{}}>
                  <div className="inner">
                    <div className="wizard-header">
                      <div className="row align-items-center mb-3">
                        <div className="col-md-4">
                          <h3 className="header">SIGN UP</h3>
                        </div>
                        <div className="col-md-8 text-end">
                          <SocialIcons />
                        </div>
                      </div>
                      <p>Please enter your valid infomation and proceed to the next step so we can build
                        your
                        accounts. </p>
                    </div>

                    <div className="form-floating mb-3">
                      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
                      <label htmlFor="floatingInput">First Name</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
                      <label htmlFor="floatingInput">Last Name</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
                      <label htmlFor="floatingInput">Phone</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
                      <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                      <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
                      <label htmlFor="floatingPassword">Password</label>
                    </div>
                  </div>
                </section>
                {/* SECTION 2 */}
                <h2 id="form-total-h-1" tabIndex={-1} className="title">
                  <p className="step-icon"><span><i className="fa-solid fa-right-to-bracket"></i></span></p>
                  <span className="step-text">SIGN IN</span>
                </h2>
                <section id="form-total-p-1" role="tabpanel" aria-labelledby="form-total-h-1" className="body" aria-hidden="true" style={{ display: "none" }}>
                  <div className="inner">
                    <div className="wizard-header">

                      <div className="row align-items-center mb-3">
                        <div className="col-md-4">
                          <h3 className="header">SIGN IN</h3>
                        </div>
                        <div className="col-md-8 text-end">
                          <SocialIcons />
                        </div>
                      </div>
                      <p>Please enter your infomation and proceed to the next step so we can build your
                        accounts.</p>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
                      <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                      <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
                      <label htmlFor="floatingPassword">Password</label>
                    </div>
                  </div>
                </section>
                {/* SECTION 3 */}
                <h2 id="form-total-h-2" tabIndex={-1} className="title">
                  <p className="step-icon"><span><i className="fa-solid fa-key"></i></span></p>
                  <span className="step-text">FORGET PASSWORD</span>
                </h2>
                <section id="form-total-p-2" role="tabpanel" aria-labelledby="form-total-h-2" className="body" aria-hidden="true" style={{ display: "none" }}>
                  <div className="inner">
                    <div className="wizard-header">
                      <h3 className="heading">FORGET PASSWORD</h3>
                      <p>A valification link will send to your valid email address</p>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
                      <label htmlFor="floatingInput">Email address</label>
                    </div>
                  </div>
                </section>
              </div>
              <div className="actions clearfix">
                <div className="submit">
                  <a href="">
                    <i className="fa-sharp fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </React.Fragment>;
};

export default SignIn;
