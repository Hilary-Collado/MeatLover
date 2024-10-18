import React from "react";
import './_Footer.sass';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

function Footer(){
    return(
        <>
            <section className="footer">
                <div className="contact">
                    <div className="number">
                        <p className="numb">+48 33 333 00 00</p>
                    </div>
                    <div className="address">
                        <p className="location">
                            <IoLocation/><span>Av. España, 21, Santiago</span><br/>Open:<br/> Lun-Vier 12:00-11:00pm,<br/>Sab-Dom 12:00 - 00:00
                        </p>
                    </div>
                    <div className="socialMedia">
                        <p className="follow"><FaFacebook /> <FaInstagramSquare/> <FaTwitter/> Follow Us</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer;