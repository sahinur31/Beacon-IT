import { faEnvelope, faGlobe, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <>
            <div className="section-title mb-5">
                <div className="container">
                    <div className="row text-center py-5">
                        <div className="col text-center">
                            <h2>Contact</h2>
                            <Breadcrumb>
                                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                <Breadcrumb.Item href="" active>
                                Contact
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                    </div>
                </div>
            </div>
            {/* section title end */}
            <section className="contact-area py-5">
                <div className="container">
                    <div className="row text-center mb-5">
                        <div className="col-sm-6 col-md-3">
                            <div className="contact-content "  >
                                <FontAwesomeIcon className="icon" icon={faPhone}></FontAwesomeIcon>
                                <h2>call us</h2>
                                <p>+8801923970212,01776-502993</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="contact-content "  >
                                <FontAwesomeIcon className="icon" icon={faMapMarkerAlt}></FontAwesomeIcon>
                                <h2>office location</h2>
                                <p>Suite 02, Level 12, Sahera Tropical Center </p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="contact-content ">
                                <FontAwesomeIcon className="icon" icon={faEnvelope}></FontAwesomeIcon>
                                <h2>email</h2>
                                <p>support@beaconit.com</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="contact-content ">
                                <FontAwesomeIcon className="icon" icon={faGlobe}></FontAwesomeIcon>
                                <h2>email</h2>
                                <p>http://beaconit.com</p>
                            </div>
                        </div>
                    </div>
                    {/* contact icon end */}
                    <div className=" text-center text-uppercase py-3 mb-3">
                        <h2>Get <span className="theme-color">in touch</span></h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="contact">
                                <form>
                                    <div className="form-group">
                                    <div className="row mb-3">
                                        <div className="col-md-6 mb-3">
                                            <input type="text" className="form-control p-3" placeholder="Enter Your Name" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="email" className="form-control p-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-6 mb-3">
                                            <input type="tel" className="form-control p-3" placeholder="Enter Your Phone" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="url" className="form-control p-3 " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Web Site" />
                                        </div>
                                    </div>
                                    </div>
                                    <input type="text" className="form-control mb-3 p-3 " placeholder="Subject" />
                                    <textarea className="form-control mb-3 p-3 " name="" id="" cols="30" rows="10">Message</textarea>
                                    <button type="submit" className="btn theme-bg text-white p-3 px-4">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* contact form end */}
                </div>
            </section>
        </>
    );
};

export default Contact;