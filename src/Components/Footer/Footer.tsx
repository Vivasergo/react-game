import React from 'react'
import logo from "../../Img/rs_school_js.png"
import style from "./footer.module.css"

export const Footer = () => {

    return (

        <footer className={style.footer} >
            <a href="https://rs.school/js/" >
                <img className={style.footerImg} src={logo} alt="logo" />
            </a>
            <span className="mx-3">February, 2021</span>
            <a href="https://github.com/Vivasergo">Author's GitHub</a>
        </footer>


    )
}