import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import image from '../../images/abouut.jpg';
const About = () => {
    return (
        <div>
            <div className="section-title mb-5">
                <div className="container">
                    <div className="row text-center py-5">
                        <div className="col text-center">
                            <h2>About Us</h2>
                            <Breadcrumb>
                                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                <Breadcrumb.Item href="" active>
                                About
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                    </div>
                    {/* breadcrumb end */}
                </div>
            </div>
            <div className="container">
                <div className="row text-left my-5">
                    <div className="col-md-6">
                        <div className="about-left">
                            <h3 className="my-5">Who We Are?</h3>
                            <p>BEACON IT was established in 2008 with a view to developing skilled resources for the IT industry in the Bangladesh. BEACON IT which is a dynamic and fast growing IT Training provider. Be an IT professional from BEACON IT.</p>
                            <p>BEACON IT is the only one specialized institute for Outsourcing and IT professional training in Chittagong. We are providing Career oriented professional training in Bangladesh since 2008</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={image} className="img-fluid" alt="" />
                    </div>
                </div>
                {/* who we end */}
                <div className="row">
                    <h3 className="my-5 text-center">Why <span className="theme-color">Beacon IT</span>?</h3>
                    <div className="col-md-3">
                        <div class="card card-accent-light mb-3">
                            <div class="card-header">01</div>
                            <div class="card-body">
                                <h5 class="card-title">Professional Course</h5>
                                <p class="card-text">A professional course is one that provides you with practical skills, making you job-ready at the completion of the course. In comparison, the goal of a degree course is to provide you with a strong academic foundation in a particular subject, not necessarily making you 'job-ready'.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="card card-accent-light mb-3">
                            <div class="card-header">02</div>
                            <div class="card-body">
                                <h5 class="card-title">Special Care </h5>
                                <p class="card-text">A professional course is one that provides you with practical skills, making you job-ready at the completion of the course. In comparison, the goal of a degree course is to provide you with a strong academic foundation in a particular subject, not necessarily making you 'job-ready'.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="card card-accent-light mb-3">
                            <div class="card-header">03</div>
                            <div class="card-body">
                                <h5 class="card-title">Trained Trainer</h5>
                                <p class="card-text">A professional course is one that provides you with practical skills, making you job-ready at the completion of the course. In comparison, the goal of a degree course is to provide you with a strong academic foundation in a particular subject, not necessarily making you 'job-ready'.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="card card-accent-light mb-3">
                            <div class="card-header">04</div>
                            <div class="card-body">
                                <h5 class="card-title">Job Security</h5>
                                <p class="card-text">A professional course is one that provides you with practical skills, making you job-ready at the completion of the course. In comparison, the goal of a degree course is to provide you with a strong academic foundation in a particular subject, not necessarily making you 'job-ready'.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="card card-accent-light mb-3">
                            <div class="card-header">05</div>
                            <div class="card-body">
                                <h5 class="card-title">Build Up carrer </h5>
                                <p class="card-text">A professional course is one that provides you with practical skills, making you job-ready at the completion of the course. In comparison, the goal of a degree course is to provide you with a strong academic foundation in a particular subject, not necessarily making you 'job-ready'.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="card card-accent-light mb-3">
                            <div class="card-header">06</div>
                            <div class="card-body">
                                <h5 class="card-title">Low Cost</h5>
                                <p class="card-text">A professional course is one that provides you with practical skills, making you job-ready at the completion of the course. In comparison, the goal of a degree course is to provide you with a strong academic foundation in a particular subject, not necessarily making you 'job-ready'.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="card card-accent-light mb-3">
                            <div class="card-header">07</div>
                            <div class="card-body">
                                <h5 class="card-title">Special Lab</h5>
                                <p class="card-text">A professional course is one that provides you with practical skills, making you job-ready at the completion of the course. In comparison, the goal of a degree course is to provide you with a strong academic foundation in a particular subject, not necessarily making you 'job-ready'.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="card card-accent-light mb-3">
                            <div class="card-header">08</div>
                            <div class="card-body">
                                <h5 class="card-title">Skilled Team</h5>
                                <p class="card-text">A professional course is one that provides you with practical skills, making you job-ready at the completion of the course. In comparison, the goal of a degree course is to provide you with a strong academic foundation in a particular subject, not necessarily making you 'job-ready'.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* why we end */}
            </div>
        </div>
    );
};

export default About;