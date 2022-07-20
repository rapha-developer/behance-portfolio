import ProgressBar from "../components/ProgressBar"
import Subject from "../components/Subject"

function AboutDetails() {
    const subject = {
        intro: "heLLo woRld!",
        title: "Sou frontend developer",
        text: "I’m a web designer / developer based on en-va-to. I have a passion for web design and love to create for web and mobile devices.",
    }
    const progress = [
        {
            label: 'html',
            percent: '90'
        },
        {
            label: 'css',
            percent: '95'
        },
        {
            label: 'javascript',
            percent: '85'
        },
    ]
    return (
        <div className="container">
            <div className="row">
                <div className="column">
                    <img src="http://themes.g5plus.net/orion/creative-agency/wp-content/uploads/2016/09/Creative_Agency_01_image_01.jpg" alt="White guy profile photo"  />
                </div>
                <div className="column">
                    <Subject subject={subject} />
                    <ProgressBar progressItems={progress} />
                </div>
            </div>
        </div>
    )
}
export default AboutDetails