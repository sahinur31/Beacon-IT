import React from 'react';
import { faEnvelope, faGlobe, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img1 from '../../images/slider.jpg';
import img2 from '../../images/sliderimg.jpg';
import image from '../../images/abouut.jpg';
import { Carousel } from 'react-bootstrap';
import SingleService from '../SingleService/SingleService';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item className="single-slide-item">
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="row">
                            <div className="col-md-8 col">
                                <h3>YOUR SUCCESS STORY <span className="theme-color">STARTS FROM HERE</span></h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                <button className="btn theme-bg text-white me-2">View Courses</button>
                                <button className="btn border text-white">Get Started</button>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="single-slide-item">
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide" />
                    <Carousel.Caption>
                        <div className="row">
                            <div className="col-md-8 col">
                                <h3>BE AN ONLINE PROFESSIONAL<span className="theme-color"> EARN MONEY AT HOME</span></h3>
                                <p>We are the leader.We already proved that.</p>
                                <button className="btn theme-bg text-white me-2">View Courses</button>
                                <button className="btn border text-white">Get Started</button>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="single-slide-item">
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                        <div className="row">
                            <div className="col-md-8 col">
                                <h3>WE ARE THE ONLY <span className="theme-color">PROFESSIONAL TRAINING INSTITUTE</span></h3>
                                <p>We train students with the only freelance marketplace experienced trainers</p>
                                <button className="btn theme-bg text-white me-2">View Courses</button>
                                <button className="btn border text-white">Get Started</button>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* slider end */}
            <SingleService></SingleService>
            <div className="container">
                <div className="row text-left my-5">
                        <div className="col-md-6">
                            <div className="about-left">
                                <h3 className="my-5">Who <span className="theme-color">We Are?</span></h3>
                                <p>BEACON IT was established in 2008 with a view to developing skilled resources for the IT industry in the Bangladesh. BEACON IT which is a dynamic and fast growing IT Training provider. Be an IT professional from BEACON IT.</p>
                                <p>BEACON IT is the only one specialized institute for Outsourcing and IT professional training in Chittagong. We are providing Career oriented professional training in Bangladesh since 2008</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={image} className="img-fluid" alt="" />
                        </div>
                </div>
            </div>
            {/* about end */}
            <div className="container">
                <div className="row text-center py-5">
                    <div className="col text-center">
                        <h2 className="theme-color">Contact</h2>
                    </div>
                </div>
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
            </div>
            {/* contact end */}
        </div>
    );
};

export default Home;