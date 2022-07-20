
function Posts() {
    const posts = [
        {
            date: "nOvEMbeR 9, 2016",
            title: "Top 3 best Commerce Websites in 2016",
            author: "David Butter",
            text: "Founded in 2014, by designers Leonard, OrionStudio is a global brand and design agency with offices in the creative hubs of London and San Francisco.",
            image: "https://themes.g5plus.net/orion/creative-agency/wp-content/uploads/2016/09/post-04-646x510.jpg",
        },
        {
            date: "nOvEMbeR 9, 2016",
            title: "The 10 best Web design in November",
            author: "David Butter",
            text: "Founded in 2014, by designers Leonard, OrionStudio is a global brand and design agency with offices in the creative hubs of London and San Francisco.",
            image: "https://themes.g5plus.net/orion/creative-agency/wp-content/uploads/2016/11/blog-02-646x510.jpg",
        },
        {
            date: "nOvEMbeR 8, 2016",
            title: "The 10 best Web design in November",
            author: "David Butter",
            text: "Founded in 2014, by designers Leonard, OrionStudio is a global brand and design agency with offices in the creative hubs of London and San Francisco.",
            image: "https://themes.g5plus.net/orion/creative-agency/wp-content/uploads/2016/11/blog-03-646x510.jpg",
        },
        {
            date: "nOvEMbeR 7, 2016",
            title: "The 10 best new graphic design tools",
            author: "David Butter",
            text: "Founded in 2014, by designers Leonard, OrionStudio is a global brand and design agency with offices in the creative hubs of London and San Francisco.",
            image: "https://themes.g5plus.net/orion/creative-agency/wp-content/uploads/2016/11/blog-04-646x510.jpg",
        },
    ]
    const posts__items = posts.map((postItem, key) => {
        const invertClass =  ((key + 1) % 2 === 0) ?  'invert' : '' 
        return (
            <div className={`posts__item ${invertClass}`} key={key}>
                <div className="posts__column post__image">
                    <img src={postItem.image} alt="Image Alt Text" />

                    <div className="posts__thumb">
                        <i className="fa-solid fa-up-right-from-square"></i>
                    </div>
                </div>
                <div className="posts__column post__column--gap">
                    <div className="posts__content">
                        <h6 className="posts__date uppercase">{postItem.date}</h6>
                        <h3 className="posts__title">{postItem.title}</h3>
                        <span className="posts__author capitalize">By {postItem.author}</span>
                        <p className="posts__text">{postItem.text}</p>
                    </div>
                </div>
            </div>
        )
    });
    return (
        <div className="posts">
            {posts__items}
        </div>
    )
}
export default Posts