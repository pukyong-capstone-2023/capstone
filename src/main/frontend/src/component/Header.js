import React from "react";
import { Navbar } from "react-bootstrap";
import titleImg from '../img/pngegg.png';

function Header() {
    return(
        <Navbar className="bg-info text-white">
            <Navbar.Brand href="/" style={{ display:'flex' }}>
                    <img src = {titleImg}/>
                    <h1>Team 올린엄지</h1>
            </Navbar.Brand>
        </Navbar>
    );    
}

export default Header;

