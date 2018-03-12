import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap'


const GBNavbar = () => {
    return (
        <Navbar inverse collapseOnSelect fixedTop={true}>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/">Gwinnett Brawl</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="/about">
                        About
                    </NavItem>
                    <NavItem eventKey={2} href="/contact">
                        Contact
                     </NavItem>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default GBNavbar;