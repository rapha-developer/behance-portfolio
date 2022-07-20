
function Banner(props) {
    const banner = props.banner
    return (
        <div className="banner">
            <h6 className="banner__subtitle uppercase">{banner.subtitle}</h6>
            <h1 className="banner__title uppercase">{banner.title}</h1>
        </div>
    )
}
export default Banner