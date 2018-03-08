import React from 'react';
import GBCarousel from './GBCarousel'
import Description from './Description'

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to the Dojo!</h1>
            <GBCarousel />
            <Description />
        </div>
    );
};

export default HomePage;