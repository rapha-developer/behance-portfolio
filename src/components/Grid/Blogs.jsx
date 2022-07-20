
function Blogs(props) {
    const blogs = props.blogs
    const blogs__items = blogs.map((blogItem, key) => {
        const classInvert = ((key + 1) % 2 === 0) ? 'invert' : "";
        return (
            <div className={`blogs__item ${classInvert}`} key={key} >
                <div className="blogs__column blogs__image" >
                    <img src={blogItem.image} alt="Alt Text Image" />

                    <div className="blogs__thumb">
                        <i className="fa-solid fa-up-right-from-square"></i>
                    </div>
                </div>
                <div className="blogs__column blogs__column--gap">
                    <div className="blogs__dateWrapper">
                        <h6 className="blogs__date uppercase">{blogItem.date}</h6>
                    </div>
                    <div className="blogs__card">
                        <div className="blogs__content">
                            <h3 className="blogs__title">{blogItem.title}</h3>
                            <span className="blogs__author">By {blogItem.author}</span>
                            <p className="blogs__text">{blogItem.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    });
    return (
        <div className="blogs">
            {blogs__items}
        </div>
    )
}
export default Blogs