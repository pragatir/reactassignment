import React from "react";
import { Navbar, Nav } from "react-bootstrap";


const NavBar = (props) => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">{props.title}</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/history">History</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;