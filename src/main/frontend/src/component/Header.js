import React from "react";
import { Image } from "react-bootstrap";
import titleImg from '../img/pngegg.png';

function Header() {
    return(
        <header className="d-flex p-3 mb-4 border-bottom bg-info bg-opacity-75 ">
            <Image src = {titleImg} />
            <h1>Team 올린엄지</h1>
        </header>
    );    
}

export default Header;

