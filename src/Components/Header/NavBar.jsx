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
                    <p className="meatLover"><span className="meat">Meat</span><br />Lover</p>
                </div>

                <ul className="navbarItem">
                    <li className="item">
                        <ScrollLink className="itemsLink" to='#AboutUs'>About Us</ScrollLink>
                    </li>
                    <li className="item">
                        <ScrollLink className="itemsLink" to='#Menu'>Menu</ScrollLink>
                    </li>
                    <li className="item">
                        <ScrollLink className="itemsLink" to='#Events'>Events</ScrollLink>
                    </li>
                    <li className="item">
                        <ScrollLink className="itemsLink" to='#Table'>Reservations</ScrollLink>
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