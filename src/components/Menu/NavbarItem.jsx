
function NavbarItem(props) {
    return (
        <li className="nav__item">
        <a 
            href={props.path} 
            className="nav__link uppercase">{props.label}</a>
    </li>
    )
}
export default NavbarItem