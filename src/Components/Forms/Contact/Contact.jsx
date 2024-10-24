import React from "react";
import './Contact.sass';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

function Contact() {
    return (
        <>
            <section className="sectionContact">
                <Header />

                <div className="Container">
                    <form action="" method="get" id="form" className="formContact">
                        <div className="name">
                            <label htmlFor="">Nombre</label>
                            <input type="text" name="name" value="Ana.." id="name" />
                        </div>

                        <div className="cellphone">
                            <label htmlFor="">Telefono</label>
                            <input type="text" name="cellphone" value="8090000000" id="cellphone" />
                        </div>

                        <div className="message">
                            <label htmlFor="">Mensaje</label>
                            <input type="text" name="message" value="Quisiera conocer..." id="message" />
                        </div>

                    </form>
                </div>

                <Footer />
            </section>

        </>
    )
}


export default Contact;