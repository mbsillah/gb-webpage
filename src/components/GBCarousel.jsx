import React from 'react';
import { Carousel } from 'react-bootstrap'
import ad_gb from '../imgs/ad_gb.jpg'

const GBCarousel = () => {

    const gbAd = ad_gb;

    return (
        <Carousel>
            <Carousel.Item>
                <img alt="GB Monthly Ad" src={gbAd} />
                <Carousel.Caption>
                    <h3>Gwinnett Brawl Monthly Tournament</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img alt="The Weekly Dojo" src={gbAd} />
                <Carousel.Caption>
                    <h3>The Weekly Dojo</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img alt="The Road to FR" src={gbAd} />
                <Carousel.Caption>
                    <h3>"The Road to ..."" Series</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default GBCarousel;