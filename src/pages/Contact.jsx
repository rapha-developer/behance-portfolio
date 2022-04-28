import Briefing from "../components/Briefing"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Poster from "../components/Poster"
import Skills from "../components/Skills"
import Stats from "../components/Stats"

function Contact() {
    return (
        <section className="about">
            <Header />

            <Poster title="About us" />

            <div className="container">
                <div className="about__row">
                    <div className="about__column">
                        <img src="http://themes.g5plus.net/orion/creative-agency/wp-content/uploads/2016/09/Creative_Agency_01_image_01.jpg" alt="" />
                    </div>
                    <div className="about__column about__column--info">
                        <Briefing
                            preface="hello world"
                            name="We Are Orion Studio"
                            bio="I’m a web designer / developer based on envato. I have a passion for web design and love to create for web and mobile devices."
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
export default Contact