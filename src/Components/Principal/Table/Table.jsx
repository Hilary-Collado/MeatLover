import React from "react";
import './_Table.sass';
import BookTable from '../../Img/wine.jpg'

function Table() {
    return (
        <>
            <section className="table" id="Table">
                <div className="container">
                    <img src={BookTable} className="bookTable" alt="" />

                    <div className="overlay">
                        <h2 className="h2">Book your table</h2>
                        <button className="button">online booking</button>
                    </div>
                </div>
            </section>

            {/* <div className="image-container">
                <img src={BookTable} className="bookTable" alt="Descripción de la imagen" />
                <div className="overlay">
                    <h2>Texto sobre la imagen</h2>
                </div>
            </div> */}

        </>
    )
}


export default Table;