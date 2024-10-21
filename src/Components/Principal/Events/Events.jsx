import React from "react";
import './_Events.sass';
import { BsArrowRight } from "react-icons/bs";
import FondoEvents from '../../Img/wine.jpg';

function Events() {
    return (
        <>
            <section className="event" id="Events">
                <div className="container">
                    <img src={FondoEvents} className="fondoEvents" alt="" />
                    <article className="article">
                        <h1 className="h1">Events</h1>
                        <article className="texto">
                            <h2 className="h2">Season's wine dinner</h2>
                            <p className="parrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Rerum obcaecati odio neque recusandae suscipit voluptates minima  <br />sint vitae voluptatibus quos, ducimus officia eum.  <br />Adipisci nobis corporis, consequuntur, velit minima,  <br />numquam fuga animi qui laudantium assumenda vitae ex rem iste? <br /> Culpa, debitis sit?  <br />Quidem, officiis ipsum.</p>
                            <p className="fecha">Dic. 24/Martes 7:30pm-12:00pm</p>
                            <button className="button">reserve table</button>
                        </article>
                    </article>
                    <div className="next">
                        <button className="nextEvents">next events <BsArrowRight className="flecha"/> </button>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Events