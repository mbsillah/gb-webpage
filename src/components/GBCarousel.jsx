import React from 'react';
import { Carousel } from 'react-bootstrap'
import gbAd from '../imgs/gb_logo_bb.jpg'
import styled from 'styled-components'

const CarouselStyle = styled.div`
    display: flex;
    justify-content: center;
`

//920 × 642

const GBCarousel = () => {
    return (
        <CarouselStyle>
            <Carousel>
                <Carousel.Item>
                    <img className="carouselPic" alt="GB Monthly Ad" src={gbAd} />
                    <Carousel.Caption className="carouselText">
                        <h3>Gwinnett Brawl Monthly Tournament</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="carouselPic" alt="The Weekly Dojo" src={gbAd} />
                    <Carousel.Caption className="carouselText">
                        <h3>The Weekly Dojo</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="carouselPic" alt="The Road to FR" src={gbAd} />
                    <Carousel.Caption className="carouselText">
                        <h3>"The Road to ..."" Series</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </CarouselStyle>
    );
};

export default GBCarousel;