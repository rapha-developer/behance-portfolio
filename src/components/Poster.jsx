
function Poster(props) {
    
    return (
        <section className="poster">
            <div className="container" >
                <span className="poster__trace poster__trace--left"></span>
                <span className="poster__trace poster__trace--right"></span>
                <div className="poster__content">
                    <h1 className="poster__title uppercase">{props.title}</h1>
                    <p className="poster__subtitle capitalize">{props.subtitle}</p>
                </div>
            </div>
        </section>
    )
}
export default Poster