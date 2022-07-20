import { useState } from 'react'
import navbarLogo from '../../assets/logo.png'

function Navbar(props) {
    const [dataVisible, setDataVisible] = useState(false)
    function changeVisibility() {
        setDataVisible((oldVisibility) => !oldVisibility)
    }
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
                            <li className="nav__item">
                                <a href="#" className="nav__link uppercase">portfolio</a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link uppercase">Gallery</a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link uppercase">blogs</a>
                                </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link uppercase">About</a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link uppercase">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar