import logo from '../../assets/rapha-logo.png'

import items from '../../api/navbarItems'
import icons from '../../api/IconItems'

import FooterItem from './FooterItem'
import IconsItem from './IconsItem'

function Footer() {
    const copyrightText = "Copyright @2022 RaphaTech Inc. "
    const copyrightExplanation = {
        url: "https://themeforest.net/item/orion-creative-multipurpose-wordpress-theme/19163616?s_rank=2",
        text: "This is a website clone to study"
    }
    const footer__icons = icons.map((iconItem) => {
        return (
            <IconsItem
                key={iconItem.icon}
                url={iconItem.url}
                icon={iconItem.icon} 
            />
        );
    });
    const footer__items = items.map((footerItem) => {
        return (
            <FooterItem 
                key={footerItem.path}
                path={footerItem.path}
                label={footerItem.label}
            />
        )
    });
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    <div className="grid__item grid__center">
                        <img className='footer__logo' src={logo} alt="RaphaTech logo" />
                    </div>
                    <div className="grid__item">
                        <ul className="footer__list">
                            {footer__items}
                        </ul>
                    </div>
                    <div className="grid__item">
                        <p className="footer__copyright">{copyrightText} 
                            <a href={copyrightExplanation.url}
                                target="_blank">{copyrightExplanation.text}</a></p>
                    </div>
                    <div className="grid__item">
                        <div className="footer__icons">
                            {footer__icons}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer