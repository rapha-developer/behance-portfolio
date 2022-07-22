import Gallery from "../components/Grid/Gallery"
import Poster from "../components/Poster"

function PortfolioInGallery(props) {
    const posterData = {
        title: "gallery",
        subtitle: "home ~ gallery"
    }
    const gallery = props.projects

    return (
        <div className="portfolioInGallery">
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