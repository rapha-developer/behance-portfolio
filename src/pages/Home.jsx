import Footer from "../components/Footer"
import Gallery from "../components/Gallery"
import Header from "../components/Header"

function Home() {
    return (
        <section className="intro">
            <Header />
            <div class="container">
                <div class="intro__informations">
                    <h2 class="intro__title">
                        Think. Design. Develop.
                    </h2>
                    <p class="intro__description">We are a new design studio based in USA. We have over 10 years of combined experience, and know a thing or two about designing websites and mobile apps. Clever use of technology and lean processes enable us to work faster and smarter.</p>
                </div>
            </div>
            <Gallery />
            <Footer />
        </section>
    )
}
export default Home