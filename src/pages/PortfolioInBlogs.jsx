import Banner from "../components/Banner"
import Blogs from "../components/Grid/Blogs"
import Poster from "../components/Poster"

function PortfolioInBlogs(props) {
    const banner = {
        title: "my blogs",
        subtitle: "latest from"
    }
    const blogs = props.projects
    
    return (
        <div className="portfolioInBlogs">
            <Banner banner={banner} />
            <div className="container">
                <Blogs blogs={blogs} />
            </div>
        </div>
    )
}
export default PortfolioInBlogs