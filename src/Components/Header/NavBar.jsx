import React from "react";
import '../Header/_Header.sass';
import PeaceOfMeat from '../Img/PeaceOfMeat.jpg';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <nav className="navBar" >
                <div className="logo">
                    <p className="meatLover"><span className="meat">Meat</span><br />Lover</p>
                </div>

                <ul className="navbarItem">
                    <li className="item">
                        <Link className="itemsLink" to='#AboutUs'>About Us</Link>
                    </li>
                    <li className="item">
                        <Link className="itemsLink" to='#Menu'>Menu</Link>
                    </li>
                    <li className="item">
                        <Link className="itemsLink" to='#Events'>Events</Link>
                    </li>
                    <li className="item">
                        <Link className="itemsLink" to='#Table'>Reservations</Link>
                    </li>
                    <li className="item">
                        <Link className="itemsLink" to='/'>Contact</Link>
                    </li>
                </ul>


            </nav>
        </>
    )
}


export default NavBar