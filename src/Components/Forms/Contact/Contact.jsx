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
                        <div className="col">
                            <div className="items name">
                                <label htmlFor="name">Nombre</label>
                                <input type="text" name="name" id="name" className="input inputName" />
                            </div>

                            <div className="items cellphone">
                                <label htmlFor="cellphone">Telefono</label>
                                <input type="text" name="cellphone" id="cellphone" className="input inputCellphone" />
                            </div>
                        </div>
                        <div className="col"> 
                            <div className="items message">
                                <label htmlFor="message">Mensaje</label>
                                <textarea name="message" id="message" className="input inputMessage" rows="10"></textarea>
                            </div>
                        </div>



                    </form>
                </div>

                <Footer />
            </section>

        </>
    )
}


export default Contact;