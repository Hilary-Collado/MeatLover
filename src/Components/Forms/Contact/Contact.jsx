import React from "react";
import './Contact.sass';
// import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';


function Contact() {
    return (
        <>
            <section className="sectionContact" id="Contact">
                {/* <Header /> */}

                <div className="Container">
                    <form action="" method="get" id="form" className="formContact">
                        <h1 className="h1">Contact</h1>
                        <div className="col">
                            <div className="items name">
                                <label htmlFor="name">Nombre</label>
                                <input type="text" name="name" id="name" className="input inputName" />
                            </div>

                            <div className="items cellphone">
                                <label htmlFor="cellphone">Telefono</label>
                                <input type="number" name="cellphone" id="cellphone" className="input inputCellphone" />
                            </div>
                        </div>
                        <div className="col col-2">
                            <div className="items email">
                                <label htmlFor="cellphone">Email</label>
                                <input type="email" name="email" id="email" className="input inputEmail" />
                            </div>
                            <div className="items message">
                                <label htmlFor="message">Mensaje</label>
                                <textarea name="message" id="message" className="input inputMessage" rows="10"></textarea>
                            </div>
                        </div>



                    </form>
                </div>

                {/* <Footer /> */}
            </section>

        </>
    )
}


export default Contact;