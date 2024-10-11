import React from "react";

import style from './NavBar.module.css'

const NavBar = ()=>{

    return(

        <>
            <nav className={style.navbar}>

                <ul className={style.list}>
                    <Link to='/'>
                        <li className={style.item}><img className={style.logo} src="./sneaker.jpg" /></li>
                    </Link>

                    <Link to='/'>
                        <li className={style.item}>Home</li>
                    </Link>

                    <Link to='/createSneaker'>
                        <li className={style.item}>Cadastrar Tênis</li>
                    </Link>

                    <Link to='/listSneaker'>
                        <li className={style.item}>Listar Tênis</li>
                    </Link>
                </ul>

            </nav>
        </>

    )

}

export default NavBar