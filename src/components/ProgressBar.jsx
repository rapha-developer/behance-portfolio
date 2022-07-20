
function ProgressBar(props) {
    const progress = props.progressItems
    const progress__items = progress.map((progressItem) => {
        const percentAfterFormatted = progressItem.percent + "%";
        const stylesToProgressComplete = {}
        const stylesToProgressPoint = {}
        const stylesToProgressPercent = {}

        stylesToProgressComplete["width"] = percentAfterFormatted
        stylesToProgressPoint["left"] = percentAfterFormatted
        stylesToProgressPercent["left"] = (progressItem.percent - 1) + '%'

        return (
            <div className="progress__item" key={progressItem.label}>
                <h6 className="progress__label uppercase">{progressItem.label}</h6>
                <div className="progress__line">
                    <div 
                        className="progress__complete" 
                        style={stylesToProgressComplete}></div>
                    <span 
                        className="progress__point" 
                        style={stylesToProgressPoint}></span>
                    <p 
                        className="progress__percent" 
                        style={stylesToProgressPercent}>{percentAfterFormatted}</p>
                </div>
            </div>
        )
    });
    return (
        <div className="progress__section">
            {progress__items}
        </div>
    )
}
export default ProgressBar