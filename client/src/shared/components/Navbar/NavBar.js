import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink'
import { MenuItems, BrandName } from './MenuItems';

class NavBar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="home">{BrandName}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {MenuItems.map(item => {
                            return (
                                <NavLink href={item.url} key = {item.title}>{item.title}</NavLink>
                                
                            )
                        })}
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar;