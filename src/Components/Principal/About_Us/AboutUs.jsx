import React from "react";
import './_AboutUs.sass';
import Fondo from '../../Img/FondoAboutUs.jpg';

function AboutUs() {
    return (
        <>
            <section className="aboutUs" id="AboutUs">    
                <div className="container">
                    <img src={Fondo} alt="" className="fondoAboutUs" />
                    {/* <div className="img">
                        <img src={Imagen_SinFondo} alt="" className="fondoAboutUs" />
                    </div> */}
                    <div className="article">
                        <h1 className="h1">About Us</h1>
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />Nulla perspiciatis aliquam eligendi veritatis natus iste?<br />Ab vero dolore porro voluptatibus laudantium iusto eum harum excepturi.<br />Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />Magni in culpa autem illo cumque corrupti harum distinctio temporibus <br />ducimus labore quo quas tempore rerum doloremque sit eveniet, <br />quaerat sapiente veniam?</p>
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Veritatis consectetur corrupti rerum nam voluptatem quia!</p>
                    </div>
                </div>
            </section> 
        </>
    )
}

export default AboutUs 