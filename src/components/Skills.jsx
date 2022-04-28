
function Skills() {
    return (
        <div className="skills">
            <div className="skills__item">
                <h4 className="skills__title">ui/ux design
                <span className="skills__percent">75%</span></h4>
                <div className="skills__progress">
                    <div className="skills__complete" style={{width: "75%"}}></div>
                </div>
            </div>

            <div className="skills__item">
                <h4 className="skills__title">web development
                <span className="skills__percent">90%</span></h4>
                <div className="skills__progress">
                    <div className="skills__complete" style={{width: "90%"}}></div>
                </div>
            </div>

            <div className="skills__item">
                <h4 className="skills__title">marketing
            <span className="skills__percent">65%</span></h4>
                <div className="skills__progress">
                    <div className="skills__complete" style={{width: "65%"}}></div>
                </div>
            </div>
        </div>
    );
}
export default Skills