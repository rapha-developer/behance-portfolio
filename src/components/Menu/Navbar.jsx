import { useState } from 'react'
import { useLocation } from 'react-router-dom';

import navbarLogo from '../../assets/logo.png'
import raphaLogo from '../../assets/rapha-logo.png'
import items from '../../api/navbarItems'
import NavbarItem from './NavbarItem';

function Navbar(props) {
    const [dataVisible, setDataVisible] = useState(false)
    function changeVisibility() {
        setDataVisible((oldVisibility) => !oldVisibility)
    }
    const itemsWithVisible = items.map((navItem)  => {
        return {...navItem, visible: false }
    });
    function getCurrentLocation() {
        const location = useLocation()
        return location.pathname
    }
    function setActiveItem() {
        const pathname = getCurrentLocation()
        const itemsWithActive  = itemsWithVisible.map((navItem) => {
            if(navItem.path === pathname) {
                return {...navItem, visible: true}
            } else {
                return {...navItem}
            }
        });
        return itemsWithActive
    }
    const [navbarItems, setNavbarItems] = useState(setActiveItem())
    
    const nav__items = navbarItems.map((navItem, key) => {
        return ( 
            <NavbarItem key={key}
                path={navItem.path}
                label={navItem.label}
                visible={navItem.visible}
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
                            <img src={raphaLogo} alt="Navbar logo" className="nav__image" />
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