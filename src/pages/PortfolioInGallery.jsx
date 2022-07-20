import Gallery from "../components/Grid/Gallery"
import Navbar from "../components/Menu/Navbar"
import Poster from "../components/Poster"

function PortfolioInGallery() {
    const posterData = {
        title: "gallery",
        subtitle: "home ~ gallery"
    }
    const gallery = [
        {
            title: "Minimum agostinho",
            image: "http://themes.g5plus.net/orion/creative-business/wp-content/uploads/2016/10/portfolio_business_07.jpg",
            tags: "Capital",
            url: "http://themes.g5plus.net/orion/creative-business/portfolio/minimum-deterruisset/"
        },
        {
            title: "Per prima heart",
            image: "http://themes.g5plus.net/orion/creative-business/wp-content/uploads/2016/10/portfolio_business_02.jpg",
            tags: "Capital",
            url: "http://themes.g5plus.net/orion/creative-business/portfolio/per-prima-denique/"
        },
        {
            title: "Habeas corpus",
            image: "http://themes.g5plus.net/orion/creative-business/wp-content/uploads/2016/10/portfolio_business_05.jpg",
            tags: "Capital",
            url: "http://themes.g5plus.net/orion/creative-business/portfolio/habeo-quodsi/"
        },
    ];
    return (
        <div className="portfolioInGallery">
            <Navbar />
            <Poster
                title={posterData.title}
                subtitle={posterData.subtitle}
            />
            <div className="container">
                <Gallery gallery={gallery} />
            </div>
        </div>
    )
}
export default PortfolioInGallery