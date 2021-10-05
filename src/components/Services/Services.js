import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';
const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch(`https://raw.githubusercontent.com/sahinur31/json-data/main/courses.json`)
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className="section-title mb-5">
                <div className="container">
                    <div className="row text-center py-5">
                        <div className="col text-center">
                            <h2>Services</h2>
                            <Breadcrumb>
                                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                <Breadcrumb.Item href="" active>
                                    Service
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                    </div>
                </div>
            </div>
            {/* section title end */}
            <div className="container">
                <div className="row">
                    {
                        services.map(service => <Service
                        key={service.key}
                        service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;