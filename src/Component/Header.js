import React from 'react'; 
import "./header.css";
import { Link } from "react-router-dom";
function Header() {
    return (
        <nav>
            <h1 className='main'>SMAT CEEV AGENCY</h1>
            <ul className='new'>
                <li>
                    <Link to="/">Home</Link>
                    </li>
                <li>
                    <Link to="/userpage">Userpage</Link>
                    </li>
                <li>
                    <Link to="/about">About</Link>
                    </li>
            </ul>
        </nav>
    );
}
export default Header;