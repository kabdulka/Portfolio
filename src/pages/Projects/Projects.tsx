
import Project from "../../components/Project/Project";
import "./Projects.scss";
import myProjects from "../../Data/ProjectsInfo"
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface ProjectType {
    name: string
    image: string
    skills: string
    description: string
    github: string
    githubUrlFE: string
}

const getFilteredProjects = (projectSelection: string): ProjectType[] => {

    const filteredProjects: ProjectType[] = [];

    if (projectSelection === "" || !projectSelection) {
        return myProjects;
    }

    myProjects.forEach(project => {

        if (project.skills.split(",").includes(projectSelection)) {
            filteredProjects.push(project)
        }
    })

    return filteredProjects;

}

const Projects = () => {

    const {prjId}: any = useParams();

    console.log(prjId)
    const myProjects = getFilteredProjects(prjId)
    console.log(myProjects)



    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [])

    return (
        <section className="projects">  

            <div className="projects__header">
                {
                    prjId !== undefined && 
                        <Link 
                            className="projects__back-link" 
                            to="/about"> 
                            
                            <ArrowBackIcon className="projects__back"></ArrowBackIcon> 
                        </Link>
                }
                {/* prjId is the project name that appears in the url */}
                <h2 className="projects__heading">
                    {
                        `Here are the ${prjId  ?  prjId : ""}  projects that I have worked on`
                    }
                </h2>

            </div>

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