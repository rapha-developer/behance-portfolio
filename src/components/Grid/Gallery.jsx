
function Gallery(props) {
    const gallery = props.gallery
    const gallery__items = gallery.map((galleryItem) => {
        return (
            <div className="gallery__item" key={galleryItem.title}>
                <img src={galleryItem.image} alt={galleryItem.title} className="gallery__image" />
                <div className="gallery__thumb">
                    <div className="gallery__content">
                        <a 
                            href={galleryItem.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="gallery__link">
                            <span className="gallery__icon"><i className="fa-solid fa-up-right-from-square"></i></span>
                            <h5 className="gallery__title">{galleryItem.title}</h5>
                            <p className="gallery__tags">{galleryItem.tags}</p>
                        </a>
                    </div>
                </div>
            </div>
        )
    });
    return (
        <div className="gallery">
            {gallery__items}
        </div>
    )
}
export default Gallery