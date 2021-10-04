import { faClock, faTags, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Service.css';

const Service = (props) => {
    const {courseName,instructor,image,duration,price} =props.service;
    return (
            <div className="col-md-4">
                <div className="service mb-4">
                    <div className="card">
                        <img className="card-img-top" src={image} alt="" />
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <p>
                                    <span className="sicon">
                                        <FontAwesomeIcon icon={faClock}></FontAwesomeIcon> 
                                    </span>
                                    {duration}</p>
                                <p>
                                <span className="sicon">
                                    <FontAwesomeIcon icon={faTags}></FontAwesomeIcon>
                                    </span>
                                    {price}</p>
                                <p>
                                <span className="sicon">
                                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                                    </span>
                                    {instructor}</p>
                            </div>
                            <h4>{courseName}</h4>
                            <p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
                           <button className="btn theme-bg text-white">Apply Now</button> 

                        </div>
                        </div>
                </div>
            </div>
    );
};

export default Service;