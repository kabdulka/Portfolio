
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

            <ul className="projects__list">
                {/* <Project image={brainFlix} name="BrainFlix"/>
                <Project image={movifi} name="MoviFi"/>
                <Project image={inStock} name="InStock"/>
                <Project image={auctions} name="Auctions"/>
                <Project image={encyclopedia} name="Wiki Encyclopedia"/> */}
                {
                    myProjects.map( (project, index) => 
                        <Project 
                            key={index}
                            image={project.image}
                            name={project.name}
                        />
                    )
                }
            </ul>

        </section>
    )

}

export default Projects;