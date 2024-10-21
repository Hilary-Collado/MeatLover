import React from "react";
import '../Header/_Header.sass';
import PeaceOfMeat from '../Img/PeaceOfMeat.jpg';
// import { Link } from 'react-router-dom';

import { Link as ScrollLink } from 'react-scroll';

function NavBar() {
    return (
        <>
            <nav className="navBar" >
                <div className="logo">
                <ScrollLink className="itemsLink" to='Header' smooth={true} duration={800}><p className="meatLover"><span className="meat">Meat</span><br />Lover</p></ScrollLink>
                </div>

                <ul className="navbarItem">
                    <li className="item">
                        <ScrollLink className="itemsLink" to='AboutUs' smooth={true} duration={800}>About Us</ScrollLink>
                    </li>
                    <li className="item">
                        <ScrollLink className="itemsLink" to='Menu' smooth={true} duration={800}>Menu</ScrollLink>
                    </li>
                    <li className="item">
                        <ScrollLink className="itemsLink" to='Events' smooth={true} duration={1000}>Events</ScrollLink>
                    </li>
                    <li className="item">
                        <ScrollLink className="itemsLink" to='Table' smooth={true} duration={1000}>Reservations</ScrollLink>
                    </li>
                    <li className="item">
                        <ScrollLink className="itemsLink" to='/'>Contact</ScrollLink>
                    </li>
                </ul>


            </nav>
        </>
    )
}


export default NavBar