import React from "react";
import './_Events.sass';
// import { WiDirectionRight } from "react-icons/wi";
import { BsArrowRight } from "react-icons/bs";

function Events() {
    return (
        <>
            <section className="event">
                    <article className="article">
                        <h2 className="h2">Events</h2>
                        <article className="texto">
                            <h3 className="h3">Season's wine dinner</h3>
                            <p className="parrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Rerum obcaecati odio neque recusandae suscipit voluptates minima  <br/>sint vitae voluptatibus quos, ducimus officia eum.  <br/>Adipisci nobis corporis, consequuntur, velit minima,  <br/>numquam fuga animi qui laudantium assumenda vitae ex rem iste? <br/> Culpa, debitis sit?  <br/>Quidem, officiis ipsum.</p>
                            <p className="fecha">Dic. 24/Martes 7:30pm-12:00pm</p>
                            <button className="button">reserve table</button>
                        </article>
                    </article> 
                    <div className="next">
                        <button className="nextEvents">next events <BsArrowRight /> </button> 
                        
                    </div>
            </section>

        </>
    )
}

export default Events