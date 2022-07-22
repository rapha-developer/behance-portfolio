import logo from '../../assets/rapha-logo.png'

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    <div className="grid__item grid__center">
                        <img className='footer__logo' src={logo} alt="RaphaTech logo" />
                    </div>
                    <div className="grid__item">
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="#" className="footer__link capitalize">home</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link capitalize">about us</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link capitalize">services</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link capitalize">blogs</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link capitalize">contact us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="grid__item">
                        <p className="footer__copyright">Copyright @2022 RaphaTech Inc.<br />This is a website clone to study</p>
                    </div>
                    <div className="grid__item">
                        <div className="footer__icons">
                            <div className="icons__item">
                                <a href="#" className="icons__link">
                                    <div className="icons__circle">
                                        <span className="right__shadow"></span>
                                        <span className="left__shadow"></span>
                                        <i className="fa-regular fa-paper-plane"></i>
                                    </div>    
                                </a>
                            </div>
                            <div className="icons__item">
                                <a href="#" className="icons__link">
                                    <div className="icons__circle">
                                        <span className="right__shadow"></span>
                                        <span className="left__shadow"></span>
                                        <i className="fa-brands fa-github"></i>
                                    </div>
                                </a>
                            </div>
                            <div className="icons__item">
                                <a href="#" className="icons__link">
                                    <div className="icons__circle">
                                        <span className="right__shadow"></span>
                                        <span className="left__shadow"></span>
                                        <i class="fa-brands fa-linkedin"></i>
                                    </div>
                                </a>
                            </div>
                            <div className="icons__item">
                                <a href="#" className="icons__link">
                                    <div className="icons__circle">    
                                        <span className="right__shadow"></span>
                                        <span className="left__shadow"></span>
                                        <i className="fa-brands fa-codepen"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer