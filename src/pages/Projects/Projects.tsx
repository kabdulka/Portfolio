
import Project from "../../components/Project/Project";
import "./Projects.scss";
import myProjects from "../../Data/ProjectsInfo"
// import brainFlix from "../../assets/images/brainflix.png";
// import inStock from "../../assets/images/inStock.png"
// import movifi from "../../assets/images/movifi.png"
// import auctions from "../../assets/images/auctions.png"
// import encyclopedia from "../../assets/images/encyclopedia.png"

const Projects = () => {

    return (
        <section className="projects">  

            <h2 className="projects__heading">
                Projects I've worked on
            </h2>

            <ul className="projects__list">
                
                {
                    myProjects.map( (project, index) => 
                        <Project 
                            key={index}
                            image={project.image}
                            name={project.name}
                            description={project.description}
                            github={project.github}
                            githubUrlFE={project.githubUrlFE}
                            skills={project.skills}
                        />
                    )
                }
            </ul>

        </section>
    )

}

export default Projects;