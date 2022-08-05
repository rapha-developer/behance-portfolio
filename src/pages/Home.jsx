import HomeIcon from "../components/Home/HomeIcon"
import icons from '../api/IconItems'
import wavesSVG from '../assets/waves.svg'
import circleSVG from '../assets/homeCircle.svg'

import heroData from "../api/heroInformation"

function Home(props) {
    const heroInformation = heroData

    const iconsTips = ["behance", "github", "codepen"];
    const iconsOnlyValid = icons.filter((iconItem) => {
        const isIconValid = iconsTips.some((iconValid) => iconItem.icon.includes(iconValid))
        if (isIconValid) {
            return iconItem
        }
    });
    const home__icons = iconsOnlyValid.map((iconItem, key) => {
        return (
            <HomeIcon 
                key={key}
                url={iconItem.url}
                icon={iconItem.icon}
            />
        );
    });
    return (
        <section className="home">
            <div className="home__thumbnail">
                <img src={wavesSVG} alt="Waves beautiful to compose background" />
            </div>
            <div className="container">
                <div className="hero__section">
                    <div className="row">
                        <div className="col">
                            <h1 className="home__title">
                                {heroInformation.user.name},<br />
                                {heroInformation.user.employer},<br />
                                {heroInformation.user.work}
                            </h1>
                            <p className="home__description">{heroInformation.description_es}</p>
                            <div className="home__icons">
                                {home__icons}
                            </div>
                        </div>
                        <div className="col photo">
                            <span className="photo__circle">
                                <img src={circleSVG} alt="Circle to compose background" />
                            </span>
                            <img className="photo__profile"  
                                src={heroInformation.image.gravatar_url} 
                                alt={heroInformation.image.alt_text} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Home