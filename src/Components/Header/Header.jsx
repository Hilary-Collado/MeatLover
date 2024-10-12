import React from "react";
import '../Header/_Header.sass';
import PeaceOfMeat from '../Img/PeaceOfMeat.jpg';

function Header(){
    return(
        <>
         <header className="header background" >
            <nav className="navBar" >
                <div className="logo">
                    <p className="meatLover"><span className="meat">Meat</span><br/>Lover</p>
                </div>
                <ul className="navbarItem">
                    <il className="item"><a className="itemsLink" href="">About Us</a></il>
                    <il className="item"><a className="itemsLink" href="">Menu</a></il>
                    <il className="item"><a className="itemsLink" href="">Events</a></il>
                    <il className="item"><a className="itemsLink" href="">Reservations</a></il>
                    <il className="item"><a className="itemsLink" href="">Contact</a></il>
                </ul>
            </nav>
            <div className="meatInfo">
                <p><span className="letThere">Let there</span><br/>be meat</p>
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