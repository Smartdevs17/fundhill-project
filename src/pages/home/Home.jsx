import {Fragment} from 'react'
import {Link} from "react-router-dom"

// import "./style.css"
// import "./owl.carousel.min.css"
// import "./owl.theme.default.min.css"
// import "./materialdesignicons.min.css"
// import "./responsive.css"
// import "./jquery.mCustomScrollbar.min.css"


function Home() {
  return (
    <Fragment>
        
        <div className="main_layout">
                  {/* loader  */}
                  <div className="loader_bg">
                    <div className="loader"><img src="/asset/images/loading.gif" alt="#" /></div>
                  </div>
                  {/* end loader */}
                  {/* header */}
                  <header>
                    {/* header inner */}
                    <div className="head_top">
                      <div className="header">
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                              <div className="full">
                                <div className="center-desk">
                                  <div className="logo">
                                    <Link to="/admin/dashboard"><img height="75px" width="75px" src="/asset/images/logo-sm.jpg" alt="#" /></Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                              <nav className="navigation navbar navbar-expand-md navbar-dark ">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                                  <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse" id="navbarsExample04">
                                  <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                      <Link className="nav-link" to="#"> Home</Link>
                                    </li>
                                    <li className="nav-item">
                                      <Link className="nav-link" to="/auth/login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                      <Link className="nav-link" to="/auth/register">Register</Link>
                                    </li>
                                  </ul>
                                </div>
                              </nav>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* end header inner */}
                      {/* end header */}
                      {/* banner */}
                      <section className="banner_main">
                        <div className="container-fluid">
                          <div className="row d_flex">
                            <div className="col-md-6">
                              <div className="text-bg">
                                <h1>FundHill MFI Administrative Software</h1>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                                <Link to="/admin/dashboard">Get Started</Link>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="text-img">
                                <figure><img src="/asset/images/home-img.png" alt="#" /></figure>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </header>
                  {/* end banner */}
                  {/* business */}
                  <div id="business" className="business">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="titlepage">
                            <span>Increase your client for</span>
                            <h2>Better position of Business</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page </p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-10 offset-md-1">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="business_box ">
                                <figure><img src="/asset/images/business_img.jpg" alt="#" /></figure>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alt=""eration in some form, by injected humour, or randomised words which don't look even slightly believableThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alt=""eration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                                <Link className="read_more" to="/admin/dashboard">Get Started</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end business */}
                  {/* Projects */}
                  <div className="projects">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="titlepage">
                            <span>Previous Projects</span>
                            <h2>Better position of Business</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page </p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-10 offset-md-1">
                          <div className="row">
                            <div className="col-md-6 offset-md-3">
                              <div className="projects_box ">
                                <figure><img src="/asset/images/projects_img.png" alt="#" /></figure>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="projects_box ">
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alt=""eration in some form, by injected humour, or randomised words which don't look even slightly believableThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alt=""eration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                                <Link className="read_more" to="/admin/dashboard">Get Started</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end projects */}
                  {/* Testimonial */}
                  <div className="section">
                    <div className="container">
                      <div id className="Testimonial">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="titlepage">
                              <h2>Testimonial</h2>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-3">
                            <div className="Testimonial_box">
                              <i><img src="/asset/images/plan1.png" alt="#" /></i>
                            </div>
                          </div>
                          <div className="col-md-9">
                            <div className="Testimonial_box">
                              <h4>Donals</h4>
                              <p>Tof Lorem Ipsum, you need to be There are many variations of passages of Lorem Ipsum available, but the majority have suffered alt=""eration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a pass <br />
                                age of Lorem Ipsum, you need to be 
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end Testimonial */}


                  {/* contact */}
                  <div id="contact" className="contact">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="titlepage">
                            <h2>Contact us</h2>
                            <span>There are many variations of passages of Lorem Ipsum available, but the </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12 ">
                          <form className="main_form ">
                            <div className="row">
                              <div className="col-md-12 ">
                                <input className="form_contril" placeholder="Name " type="text" name="Name " />
                              </div>
                              <div className="col-md-12">
                                <input className="form_contril" placeholder="Phone Number" type="text" name=" Phone Number" />
                              </div>
                              <div className="col-md-12">
                                <input className="form_contril" placeholder="Email" type="text" name="Email" />
                              </div>
                              <div className="col-md-12">
                                <textarea className="textarea" placeholder="Message" type="text" name="Message" defaultValue={""} />
                              </div>
                              <div className="col-sm-12">
                                <button className="send_btn">Send</button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end contact */}

                          
    {/*  footer */}
              <footer>
                <div className="footer">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12 ">
                        <div className="cont">
                          <h3> <strong className="multi"> FundHill</strong><br />
                            Microfinance Bank
                          </h3>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <ul className="social_icon">
                          <li><Link to="#"><i className="fa fa-facebook" aria-hidden="true" /></Link></li>
                          <li><Link to="#"><i className="fa fa-twitter" aria-hidden="true" /></Link></li>
                          <li><Link to="#"><i className="fa fa-linkedin" aria-hidden="true" /></Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="copyright">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <p>Copyright 2022 All Right Reserved By <Link to="https://stephenjoseph.netlify.com/"> Smart Developers</Link></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
               
          </div>

{/* end footer */}



    </Fragment>
  )
}

export default Home