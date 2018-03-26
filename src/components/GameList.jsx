import React from 'react';
import styled from 'styled-components'
import mvci from '../imgs/mvci.png'
import dbfz from '../imgs/dbfz.png'
import sfv from '../imgs/sfv.png'
import smash4 from '../imgs/smash4.png'
import tekken7 from '../imgs/tekken7.png'


const GameListStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const GameList = () => {
    return (
        <div>
        <GameListStyle>
            <img src={mvci} alt="Marvel vs Capcom: Infinite"/>
            <img src={dbfz} alt="Dragon Ball FighterZ"/>
            <img src={sfv} alt="Street Fighter V: Arcade Edition"/>
            <img src={smash4} alt="Super Smash Bros. for Wii U"/>
            <img src={tekken7} alt="Tekken 7"/>
        </GameListStyle>
        </div>
    );
};

export default GameList;