import Posts from "../components/Grid/Posts"
import Poster from "../components/Poster"

function PortfolioInPosts(props) {
    const posterData = {
        title: "posts",
        subtitle: "home ~ posts"
    }
    const posts = props.projects

    return (
        <div className="portfolioInPosts">
            <Poster 
                title={posterData.title}
                subtitle={posterData.subtitle}
            />
            <div className="container">
                <Posts posts={posts} />
            </div>
        </div>
    )
}
export default PortfolioInPosts