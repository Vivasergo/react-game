import React from 'react'
import { NavLink } from "react-router-dom"
import logo from "../../Img/rs_school_js.png"
import style from "./footer.module.css"

export const Footer = () => {

    return (

        <footer className={style.footer} >
            <NavLink to="https://rs.school/js/" >
                <img className={style.footerImg} src={logo} alt="logo" />
            </NavLink>
            <span className="mx-3">February, 2021</span>
            <NavLink to="https://github.com/Vivasergo">Author's GitHub</NavLink>
        </footer>


    )
}