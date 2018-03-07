import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const NavStyle = styled.div`
    ul {
        list-style: none;
    }
`

const Navbar = () => {
    return (
        <NavStyle>
            <ul>
                <button><Link to='/'>Home</Link></button>
                <button><Link to='/about'>About</Link></button>
                <button><Link to='/contact'>Contact</Link></button>
            </ul>
        </NavStyle>
    );
};

export default Navbar;