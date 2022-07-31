import About from "./About"
import Contact from "./Contact"
import PortfolioInBlogs from "./PortfolioInBlogs"
import PortfolioInGallery from "./PortfolioInGallery"
import PortfolioInPosts from "./PortfolioInPosts"

function Home(props) {
    const projects = props.projects

    function filterGalleryItems(element, index) {
        return element.id >= 142441951 && element.id <= 143696389
    }
    function filterBlogItems(element, index) {
        return element.id >= 141023567 && element.id <= 141054389
    }
    function filterPostsItems(element, index) {
        return element.id >= 140122905 && element.id <= 140205203
    }
    const galleryItems = projects.filter(filterGalleryItems)
    const blogItems = projects.filter(filterBlogItems)
    const postItems = projects.filter(filterPostsItems)
    return (
        <div className="home">
            <PortfolioInGallery projects={galleryItems} />
            <PortfolioInBlogs projects={blogItems} />
            <PortfolioInPosts projects={postItems} />
            <About />
            <Contact />
        </div>
    )
}
export default Home