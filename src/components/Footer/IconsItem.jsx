
function IconsItem(props) {
    return (
        <div className="icons__item">
            <a href={props.url}
                target="_blank"
                className="icons__link">
                <div className="icons__circle">
                    <span className="right__shadow"></span>
                    <span className="left__shadow"></span>
                    <i className={props.icon}></i>
                </div>    
            </a>
        </div>
    )
}
export default IconsItem