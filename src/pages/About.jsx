import Briefing from "../components/Briefing"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Poster from "../components/Poster"
import Skills from "../components/Skills"
import Stats from "../components/Stats"

function About() {

    const data = {
        poster__title: "About us",
        about__img: "http://themes.g5plus.net/orion/creative-agency/wp-content/uploads/2016/09/Creative_Agency_01_image_01.jpg",
        briefing__preface: "hello world",
        briefing__name: "We Are Orion Studio",
        briefing__bio: "I’m a web designer / developer based on envato. I have a passion for web design and love to create for web and mobile devices."
    }

    return (
        <section className="about">
            <Header />
            <Poster title={data.poster__title} />

            <div className="container">
                <div className="about__row">
                    <div className="about__column">
                        <img src={data.about__img} alt="" />
                    </div>
                    <div className="about__column about__column--info">
                        <Briefing
                            preface={data.briefing__preface}
                            name={data.briefing__name}
                            bio={data.briefing__bio}
                        />
                        <Skills />
                    </div>
                </div>
            </div>
            <Stats />
            <Footer />
        </section>
    )
}
export default About