import data from '../api/projects.js';

function Gallery() {
    const projects = data[0].projects
    const gridItems = projects.map((projectItem) => {

    const projectThumb = projectItem.covers.original;
        return (
            <div className="gallery__item">
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