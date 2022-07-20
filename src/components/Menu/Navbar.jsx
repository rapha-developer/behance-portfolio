import { useState } from 'react'
import navbarLogo from '../../assets/logo.png'
import NavbarItem from './NavbarItem';

function Navbar(props) {
    const [dataVisible, setDataVisible] = useState(false)
    function changeVisibility() {
        setDataVisible((oldVisibility) => !oldVisibility)
    }
    const navbarItems = [
        {
            path: "/",
            label: "home"
        },
        {
            path: "/posts",
            label: "portfolio"
        },
        {
            path: "/gallery",
            label: "Gallery"
        },
        {
            path: "/blogs",
            label: "blogs"
        },
        {
            path: "/about",
            label: "about"
        },
        {
            path: "/contact",
            label: "contact"
        },
    ];
    const nav__items = navbarItems.map((navItem) => {
        return ( 
            <NavbarItem 
                path={navItem.path}
                label={navItem.label}
            />
        );
    });

    return (
        <nav className="navbar">
            <div className="container">
                <div className="nav__wrapper">
                    <div className="nav__header" 
                        data-visible={dataVisible} >
                        <div className="nav__logo">
                            <img src={navbarLogo} alt="Navbar logo" className="nav__image" />
                        </div>
                        <button className="nav__hamburger" 
                                onClick={changeVisibility}
                                aria-controls="nav-content"><i className="fa-solid fa-bars"></i>
                        </button>
                    </div>
                    <div className="nav__content" id='nav-content' data-visible={dataVisible}>
                        <ul className="nav__list">
                            {nav__items}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar