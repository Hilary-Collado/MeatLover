import React from "react";
import './_Footer.sass';

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
                            <span>Av. España, 21, Santiago</span><br/>Open Lun-Vier 12:00-11:00pm,<br/>Sab-Dom 12:00 - 00:00
                        </p>
                    </div>
                    <div className="socialMedia">
                        <p className="follow">Follow Us</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer;