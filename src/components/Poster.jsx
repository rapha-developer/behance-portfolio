
function Poster(props) {
    return (
        <div className="poster__head">
            <div className="poster__introduction">
                <span className="poster__component--left"></span>
                <h1 className="poster__title">{props.title}</h1>
                <span className="poster__component--right"></span>
            </div>
            <p className="poster__history"><a href="#">Home</a> ~ {props.title}</p>
        </div>
    )
}
export default Poster