
function NavbarItem(props) {
    const className = (props.visible) ? 'nav__item active' : 'nav__item';
    return (
        <li className={className}>
        <a 
            href={props.path} 
            className="nav__link uppercase">{props.label}</a>
    </li>
    )
}
export default NavbarItem