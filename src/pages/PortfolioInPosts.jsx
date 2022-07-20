import Posts from "../components/Grid/Posts"
import Poster from "../components/Poster"

function PortfolioInPosts() {
    const posterData = {
        title: "posts",
        subtitle: "home ~ gallery"
    }
    const posts = [
        {
            date: "nOvEMbeR 9, 2016",
            title: "Top 3 best Commerce Websites in 2016",
            author: "David Butter",
            text: "Founded in 2014, by designers Leonard, OrionStudio is a global brand and design agency with offices in the creative hubs of London and San Francisco.",
            image: "https://themes.g5plus.net/orion/creative-agency/wp-content/uploads/2016/09/post-04-646x510.jpg",
            url: "http://themes.g5plus.net/orion/creative-business/portfolio/minimum-deterruisset/"
        },
        {
            date: "nOvEMbeR 9, 2016",
            title: "The 10 best Web design in November",
            author: "David Butter",
            text: "Founded in 2014, by designers Leonard, OrionStudio is a global brand and design agency with offices in the creative hubs of London and San Francisco.",
            image: "https://themes.g5plus.net/orion/creative-agency/wp-content/uploads/2016/11/blog-02-646x510.jpg",
            url: "http://themes.g5plus.net/orion/creative-business/portfolio/per-prima-denique/"
        },
        {
            date: "nOvEMbeR 8, 2016",
            title: "The 10 best Web design in November",
            author: "David Butter",
            text: "Founded in 2014, by designers Leonard, OrionStudio is a global brand and design agency with offices in the creative hubs of London and San Francisco.",
            image: "https://themes.g5plus.net/orion/creative-agency/wp-content/uploads/2016/11/blog-03-646x510.jpg",
            url: "http://themes.g5plus.net/orion/creative-business/portfolio/habeo-quodsi/"
        },
        {
            date: "nOvEMbeR 7, 2016",
            title: "The 10 best new graphic design tools",
            author: "David Butter",
            text: "Founded in 2014, by designers Leonard, OrionStudio is a global brand and design agency with offices in the creative hubs of London and San Francisco.",
            image: "https://themes.g5plus.net/orion/creative-agency/wp-content/uploads/2016/11/blog-04-646x510.jpg",
            url: "http://themes.g5plus.net/orion/creative-business/portfolio/"
        },
    ];

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