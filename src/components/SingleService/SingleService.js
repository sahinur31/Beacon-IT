import React from 'react';
import { faClock, faTags, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { useState } from 'react';
const SingleService = () => {
    const [services,setServices] = useState([]);
    let size = 4;
    useEffect(()=>{
        fetch(`https://raw.githubusercontent.com/sahinur31/json-data/main/courses.json`)
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className="container">
                <div className="row text-center py-5">
                        <div className="col section-title text-center">
                            <h2>Services</h2>
                        </div>
                </div>
                <div className="row">
                    {
                        services.slice(0,size).map((pd)=>(

                       
                    <div className="col-md-3">
                        <div className="service mb-4">
                            <div className="card">
                                <img className="card-img-top" src={pd.image} alt="" />
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <p>
                                            <span className="sicon">
                                                <FontAwesomeIcon icon={faClock}></FontAwesomeIcon> 
                                            </span>
                                            {pd.duration}</p>
                                        <p>
                                        <span className="sicon">
                                            <FontAwesomeIcon icon={faTags}></FontAwesomeIcon>
                                            </span>
                                            {pd.price}</p>
                                        <p>
                                        <span className="sicon">
                                            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                                            </span>
                                            {pd.instructor}</p>
                                    </div>
                                    <h4>{pd.courseName}</h4>
                                    <p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
                                    <button className="btn theme-bg text-white">Apply Now</button> 

                                </div>
                            </div>
                        </div>
                    </div>
                     ))}
                </div>
            </div>
        </div>
    );
};

export default SingleService;