import React from 'react';
import '../Menu/_Menu.sass'

function Menu() {
    return (
        <>
            <section className='menu'>
                <div className="container">
                    <div className="titulo">
                        <h1 className="h1">Menu</h1>
                    </div>

                    <div className="contenido">

                        <div className="starter">
                            <div className="imagen">
                                <img src="" alt="" />
                            </div>

                            <div className="cont">
                                <h3 className="h3">Starters</h3>
                                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quas.</p>
                            </div>
                        </div>

                        <div className="dishChef">
                            <div className="imagen">
                                <img src="" alt="" />
                            </div>

                            <div className="cont">
                                <h3 className="h3">dish from the chef</h3>
                                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quas.</p>
                            </div>
                        </div>

                        <div className="steak">
                            <div className="imagen">
                                <img src="" alt="" />
                            </div>

                            <div className="cont">
                                <h3 className="h3">steak</h3>
                                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quas.</p>
                            </div>
                        </div>

                        <div className="seaFood">
                            <div className="imagen">
                                <img src="" alt="" />
                            </div>

                            <div className="cont">
                                <h3 className="h3">sea food gril and fish</h3>
                                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quas.</p>
                            </div>
                        </div>

                        <div className="desert">
                            <div className="imagen">
                                <img src="" alt="" />
                            </div>

                            <div className="cont">
                                <h3 className="h3">deserts</h3>
                                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quas.</p>
                            </div>
                        </div>
                    </div>

                    <div className="pie">
                        <h3>It is deliciuos</h3>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Menu