import ProgressBar from "../components/ProgressBar"
import Subject from "../components/Subject"

function AboutDetails(props) {
    const subject = props.subject
    const progressItems = props.progressItems

    return (
        <div className="about__details">
            <div className="container">
                <div className="row">
                    <div className="column">
                        <img src="http://themes.g5plus.net/orion/creative-agency/wp-content/uploads/2016/09/Creative_Agency_01_image_01.jpg" alt="White guy profile photo"  />
                    </div>
                    <div className="column">
                        <Subject subject={subject} />
                        <ProgressBar progressItems={progressItems} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutDetails