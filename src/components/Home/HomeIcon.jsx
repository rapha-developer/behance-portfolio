
function HomeIcon(props) {
    return (
        <a href={props.url} 
            target="_blank" 
            className="home__icon">
            <i className={props.icon}></i>
        </a>
    )
}
export default HomeIcon