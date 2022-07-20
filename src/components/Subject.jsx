
function Subject(props) {
    const subject = props.subject
    return (
        <div className="subject">
            <h6 className="subject__intro uppercase">{subject.intro}</h6>
            <h2 className="subject__title capitalize">{subject.title}</h2>
            <p className="subject__text">{subject.text}</p>
        </div>
    )
}
export default Subject