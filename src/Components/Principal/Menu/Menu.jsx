import React from 'react';
import '../Menu/_Menu.sass';
import Starters from '../../Img/starters.jpg';
import DishChef from '../../Img/dish.jpg';
import Steak from '../../Img/steak.jpg';
import Seafood from '../../Img/seafood.jpg';
import Desert from '../../Img/desert.jpg';

function Menu() {
    return (
        <>
            <section className='menu'>
                <div className="titulo">
                    <h1 className="h1">Menú</h1>
                </div>

                <div className="container starter">
                    <img src={Starters} alt="" className='startersImg' />

                    <div className="info starterInfo">
                        <h3 className="h3">Starters</h3>
                        <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique ipsam quos odio quasi quis est repellat aliquam dolorem fuga! Quos culpa eaque incidunt sequi aperiam?</p>
                    </div>
                </div>

                <div className="container dishChef">
                    <div className="info dishChefInfo">
                        <h3 className="h3">dish from the chef</h3>
                        <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, cum exercitationem? Dolore ad error beatae quae dolores tenetur illum, commodi alias minima laborum corrupti suscipit, iusto, inventore officiis iste consequatur aspernatur. Veniam, at voluptas.</p>
                    </div>

                    <img src={DishChef} alt="" />
                </div>

                <div className="container steak">
                    <img src={Steak} alt="" />

                    <div className="info steakInfo">
                        <h3 className="h3">steak</h3>
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis provident, necessitatibus earum adipisci laborum delectus. Suscipit quas harum enim corporis, est atque tenetur. Excepturi ullam repellat fugiat dolores qui culpa ducimus dicta eveniet illo consequatur.</p>
                    </div>
                </div>

                <div className="container seaFood">
                    <div className="info seaFoodInfo">
                        <h3 className="h3">sea food gril and fish</h3>
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis provident, necessitatibus earum adipisci laborum delectus. Suscipit quas harum enim corporis, est atque tenetur. Excepturi ullam repellat fugiat dolores qui culpa ducimus dicta eveniet illo consequatur.</p>
                    </div>
                    
                    <img src={Seafood} alt="" />
                </div>

                <div className="container desert">
                    <img src={Desert} alt="" />

                    <div className="info desertInfo">
                        <h3 className="h3">deserts</h3>
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis provident, necessitatibus earum adipisci laborum delectus. Suscipit quas harum enim corporis, est atque tenetur. Excepturi ullam repellat fugiat dolores qui culpa ducimus dicta eveniet illo consequatur.</p>
                    </div>
                </div>

                <div className="pie">
                    <h3 className='h3'>It is deliciuos</h3>
                </div>

            </section>
        </>
    )
}

export default Menu