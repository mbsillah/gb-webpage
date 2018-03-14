import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';


const IconStyle = styled.div`
    ul {
        list-style: none;
        display: flex;
        justify-content: center;
        li {
            padding: 0 20px;
        }
    };
`

const Footer = () => {
    return (
        <div>
            <h3>Follow us on: </h3>
            <IconStyle>
                <ul>
                    <li><Link target="_blank" to="https://www.facebook.com/gwinnettbrawl"><i className="fa fa-facebook"></i></Link></li>
                    <li><Link target="_blank" to="https://twitter.com/gbdojo"><i className="fa fa-twitter"></i></Link></li>
                    <li><Link target="_blank" to="https://twitch.tv/gbdojo"><i className="fa fa-twitch"></i></Link></li>
                </ul>
            </IconStyle>
            <h3>Gwinnett Brawl, LLC</h3>
        </div>
    );
};

export default Footer;