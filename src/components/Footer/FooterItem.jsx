
function FooterItem(props) {
    return (
        <li className="footer__item">
            <a href={props.path} className="footer__link capitalize">{props.label}</a>
        </li>
    )
}
export default FooterItem