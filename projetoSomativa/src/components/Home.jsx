import React from "react";

import style from './Home.module.css'

const Home = ()=>{
    return(

        <section className={style.home_container}>
            <h1>Bem vindo a SneakerMarketplace </h1>
            <p>Site em que o Sneakerhead encontrará seu sneaker dos sonhos!</p>
            <img src="./sneaker_home.jpg" />
        </section>

    )
}

export default Home