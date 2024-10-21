import React from "react";
import '../Header/_Header.sass';
import PeaceOfMeat from '../Img/PeaceOfMeat.jpg';
import NavBar from './NavBar';

function Header() {
    return (
        <>
            <header className="header background" >
                <NavBar/>
                <div className="meatInfo">
                    <p><span className="letThere">Let there</span><br />be meat</p>
                </div>

                <div className="contact">
                    <p className="numb">+48 33 33 3333</p>
                    <button className="button">online booking</button>
                </div>
            </header>
        </>
    )
}


export default Header


{/* <ul className="navbarItem">
                    <li className="item"><a className="itemsLink" href="#AboutUs">About Us</a></li>
                    <li className="item"><a className="itemsLink" href="#Menu">Menu</a></li>
                    <li className="item"><a className="itemsLink" href="#Event">Events</a></li>
                    <li className="item"><a className="itemsLink" href="#Table">Reservations</a></li>
                    <li className="item"><a className="itemsLink" href="src/Components/Forms/Form.jsx">Contact</a></li>
                </ul> */}