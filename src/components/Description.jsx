import React from 'react';
import gb01 from '../imgs/gb01.jpg'
import gb02 from '../imgs/gb02.jpg'
import GameList from './GameList'


const Description = () => {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <h2>Atlanta's Premier Fighting Game Tournament</h2>
            </div>
            <div>
                <img src={gb01} alt="gbrawl1" className="img-fluid" />
            </div>
            <div className="jumbotron jumbotron-fluid">
                <h2>Various Fighting Games Such As:</h2>
            </div>
            <GameList />
            <div className="jumbotron jumbotron-fluid">
                <h2>Hype Moments Galore!</h2>
            </div>
            <div>
                <img src={gb02} alt="gbrawl2" className="img-fluid" />
            </div>
        </div>
    );
};

export default Description;