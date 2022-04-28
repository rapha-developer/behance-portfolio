import { useState } from "react";

import navbarData from '../api/navbar';

function Navbar(props) {

    const mediaItems = navbarData.navbarIcons.map((navbarIcon) => {
        return (
            <a href={navbarIcon.url} class="navbar__icon"><i class={navbarIcon.class}></i></a>
        );
    });
    const navbarItems = navbarData.navbarItems.map((navbarItem) => {
        return (
            <li class="navbar__item">
                <a href={navbarItem.url} class="navbar__link">{navbarItem.name}</a>
            </li>
        );
    });
    
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
                    {navbarItems}
                </ul>

                <div class="navbar__media">
                    {mediaItems}
                </div>
            </div>
        </nav>
    );
}
export default Navbar