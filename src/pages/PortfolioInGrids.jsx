import Banner from "../components/Banner"
import Blogs from "../components/Grid/Blogs"
import Navbar from "../components/Menu/Navbar"
import Poster from "../components/Poster"

function PortfolioInGrids() {
    const banner = {
        title: "my blogs",
        subtitle: "latest from"
    }
    const blogs = [
        {
            date: "nOvEMbeR 9, 2016",
            title: "Top 3 best Commerce Websites in 2016",
            author: "David Butter",
            text: "Founded in 2014, by designers Leonard, OrionStudio is a global brand and design agency with offices in the creative hubs of London and San Francisco. Using effective strategies and innovative creative thinking",
            image: "https://themes.g5plus.net/orion/creative-agency/wp-content/uploads/2016/09/post-04-646x510.jpg",
        },
        {
            date: "nOvEMbeR 4, 2016",
            title: "Difference between art and design",
            author: "David Butter",
            text: "Founded in 2014, by designers Leonard, OrionStudio is a global brand and design agency with offices in the creative hubs of London and San Francisco. Using effective strategies and innovative creative thinking",
            image: "https://themes.g5plus.net/orion/creative-agency/wp-content/uploads/2016/10/gallery2-646x510.jpg",
        },
    ]
    return (
        <div className="portfolioInGrids">
            <Navbar />
            <Banner banner={banner} />
            <div className="container">
                <Blogs blogs={blogs} />
            </div>
        </div>
    )
}
export default PortfolioInGrids