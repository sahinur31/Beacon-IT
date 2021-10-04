import React from 'react';
import img1 from '../../images/slider.jpg';
import img2 from '../../images/sliderimg.jpg';
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
                    <h3>YOUR SUCCESS STORY <span className="theme-color">STARTS FROM HERE</span></h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="single-slide-item">
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>BE AN ONLINE PROFESSIONAL<span className="theme-color"> EARN MONEY AT HOME</span></h3>
                    <p>We are the leader.We already proved that.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="single-slide-item">
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>WE ARE THE ONLY <span className="theme-color">PROFESSIONAL TRAINING INSTITUTE IN CHITTAGONG</span></h3>
                    <p>We train students with the only freelance marketplace experienced trainers</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            <SingleService></SingleService>
        </div>
    );
};

export default Home;