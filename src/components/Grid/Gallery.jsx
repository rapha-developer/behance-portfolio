
function Gallery() {
    const gallery = [
        {
            title: "Minimum agostinho",
            image: "http://themes.g5plus.net/orion/creative-business/wp-content/uploads/2016/10/portfolio_business_07.jpg",
            tags: "Capital",
            url: "http://themes.g5plus.net/orion/creative-business/portfolio/minimum-deterruisset/"
        },
        {
            title: "Per prima heart",
            image: "http://themes.g5plus.net/orion/creative-business/wp-content/uploads/2016/10/portfolio_business_02.jpg",
            tags: "Capital",
            url: "http://themes.g5plus.net/orion/creative-business/portfolio/per-prima-denique/"
        },
        {
            title: "Habeas corpus",
            image: "http://themes.g5plus.net/orion/creative-business/wp-content/uploads/2016/10/portfolio_business_05.jpg",
            tags: "Capital",
            url: "http://themes.g5plus.net/orion/creative-business/portfolio/habeo-quodsi/"
        },
    ];
    const gallery__items = gallery.map((galleryItem) => {
        return (
            <div className="gallery__item" key={galleryItem.title}>
                <img src={galleryItem.image} alt={galleryItem.title} className="gallery__image" />
                <div className="gallery__thumb">
                    <div className="gallery__content">
                        <a href={galleryItem.url} className="gallery__link">
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