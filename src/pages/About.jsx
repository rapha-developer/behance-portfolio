import Navbar from "../components/Menu/Navbar"
import Poster from "../components/Poster"
import AboutDetails from "../molecules/AboutDetails"

function About() {
    const posterData = {
        title: "about",
        subtitle: "home ~ about"
    }
    const subject = {
        intro: "heLLo woRld!",
        title: "we are agency",
        text: "I’m a web designer / developer based on en-va-to. I have a passion for web design and love to create for web and mobile devices.",
    }
    const progress = [
        {
            label: 'photoShop',
            percent: '90'
        },
        {
            label: 'development',
            percent: '95'
        },
        {
            label: 'design',
            percent: '85'
        },
    ]
    return (
        <div className="about">
            <Navbar />
            <Poster 
                title={posterData.title}
                subtitle={posterData.subtitle}
            />
            <AboutDetails 
                subject={subject} 
                progressItems={progress} 
            />
        </div>
    )
}
export default About