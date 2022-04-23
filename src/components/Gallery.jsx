import data from '../api/projects.js';

function Gallery() {

    function getAnimationDelay(item) {
        const milliseconds = "ms";
        const animationTimeDefault = 500;
        const animationDelay = (item * animationTimeDefault) + animationTimeDefault;
        return (animationDelay + milliseconds);
    }
    const projects = data[0].projects;
    
    const gridItems = projects.map((projectItem, keyProject) => {
        const animationDelay = getAnimationDelay(keyProject);

        const projectThumb = projectItem.covers.original;
            return (
                <div style={{animationDelay: animationDelay}} className="gallery__item" >
                    <span className="grid__modal">
                        <h4 className="modal__title">{projectItem.name}</h4>
                        <p className="modal__category">
                            <a href={projectItem.url} target="_blank" rel="noreferrer noopener">
                                <i class="fa-brands fa-behance"></i>Click here
                            </a></p>
                    </span>
                    <img src={projectThumb} alt="" />
                </div>
            );
    });

    return (
        <div className="gallery">
            {gridItems}
        </div>
    )
}
export default Gallery