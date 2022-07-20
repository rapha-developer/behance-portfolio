
function Posts(props) {
    const posts = props.posts
    const posts__items = posts.map((postItem, key) => {
        const invertClass =  ((key + 1) % 2 === 0) ?  'invert' : '' 
        return (
            <div className={`posts__item ${invertClass}`} key={key}>
                <div className="posts__column post__image">
                    <img src={postItem.image} alt="Image Alt Text" />

                    <a 
                        href={postItem.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="posts__link" >
                        <div className="posts__thumb">                        
                            <i className="fa-solid fa-up-right-from-square"></i>
                        </div>
                    </a>

                </div>
                <div className="posts__column post__column--gap">
                    <div className="posts__content">
                        <h6 className="posts__date uppercase">{postItem.date}</h6>
                        <a 
                        href={postItem.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="posts__link" >
                            <h3 className="posts__title">{postItem.title}</h3>
                        </a>
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