
class ProjectModel {
    constructor(project) {
        this.id = project.id;
        this.date = this.makeDate(project.published_on);
        this.title = project.name;
        this.author = project.owners[0].display_name;
        this.image = project.covers[808];
        this.url = project.url;
        this.tags = project.fields[this.generateRandomInteger(3)]
        this.appreciations = project.stats.appreciations;
        this.views = project.stats.views;
        this.year = this.getYear(project.published_on);
        this.text = `${project.name} is a beautiful and responsive design, make with HTML5 and CSS3. 
    This design have ${project.stats.views} views and codepen project (demo)`
    }
    generateRandomInteger(max) {
        return Math.floor(Math.random() * max);
    }
    getYear(timestampInSeconds) {
        const timestampInMilliseconds = this.secondsToMilliseconds(timestampInSeconds)
        const date = new Date(timestampInMilliseconds);    
        return date.getFullYear()
    }
    
    makeDate(timestampInSeconds) {
        const timestampInMilliseconds = this.secondsToMilliseconds(timestampInSeconds)
        const months = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", 
                        "julho", "agosto","setembro", "outubro", "novembro", "dezembro"]

        const date = new Date(timestampInMilliseconds);    
        const day = date.getDate()
        const month = months[date.getMonth()]
        const year = date.getFullYear()
        
        return (month + " " + day + ", " + year)
    }
    secondsToMilliseconds(timestampInSeconds) {
        const constantToMilliseconds = 1000
        return (timestampInSeconds * constantToMilliseconds)
    }
}

export {ProjectModel}