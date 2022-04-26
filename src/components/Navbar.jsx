import { useState } from "react";

function Navbar(props) {
    
    return (
        <nav class="navbar">
            <div class="navbar__head">
                <img src="https://html.nkdev.info/snow/assets/images/logo-light.svg"
                    alt=""
                    class="navbar__logo navbar__logo--light"
                    data-visible={props.dataVisible} />
                <img src="https://html.nkdev.info/snow/assets/images/logo.svg"
                    alt="Navbar Logo"
                    class="navbar__logo navbar__logo--dark"
                    data-visible={ !props.dataVisible } />
                <button class="navbar__hamburguer" 
                        aria-controls="navbar-content"
                        data-visible={ props.dataVisible }
                        onClick={props.setVisible}>
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
            <div class="navbar__content" id="navbar-content" data-visible={props.dataVisible}>
                <ul class="navbar__list">
                    <li class="navbar__item">
                        <a href="#" class="navbar__link">home</a>
                    </li>
                    <li class="navbar__item">
                        <a href="#" class="navbar__link">work</a>
                    </li>
                    <li class="navbar__item">
                        <a href="#" class="navbar__link">about</a>
                    </li>
                    <li class="navbar__item">
                        <a href="#" class="navbar__link">contact</a>
                    </li>
                </ul>

                <div class="navbar__media">
                    <a href="#" class="navbar__icon"><i class="fa-brands fa-behance"></i></a>
                    <a href="#" class="navbar__icon"><i class="fa-brands fa-github"></i></a>
                    <a href="#" class="navbar__icon"><i class="fa-brands fa-codepen"></i></a>
                </div>
            </div>
        </nav>
    );
}
export default Navbar