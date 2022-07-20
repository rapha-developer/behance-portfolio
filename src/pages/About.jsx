import Poster from "../components/Poster"
import AboutDetails from "../molecules/AboutDetails"

function About() {
    const posterData = {
        title: "about",
        subtitle: "home ~ about"
    }
    const subject = {
        intro: "heLLo eveRboDY!",
        title: "Sou frontend developer",
        text: "Sou um web designer / developer que programa em HTML, CSS, JAVASCRIPT & REACT. Eu tenho a preocupação de construir Websites e Apps esteticamente agradáveis e fáceis de realizar manutenção.",
    }
    const progress = [
        {
            label: 'html',
            percent: '90'
        },
        {
            label: 'css',
            percent: '60'
        },
        {
            label: 'javascript',
            percent: '55'
        },
        {
            label: 'react',
            percent: '15'
        },
    ];
    return (
        <div className="about">
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