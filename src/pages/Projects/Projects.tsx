
import Project from "../../components/Project/Project";
import "./Projects.scss";
import myProjects from "../../Data/ProjectsInfo"
import { useParams } from "react-router-dom";
import { useEffect } from "react";



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
        console.log(project.skills.split(","))
        // console.log(project)
        console.log(projectSelection)
        if (project.skills.split(", ").includes(projectSelection)) {
            filteredProjects.push(project)
        }
    })

    return filteredProjects;

}

const Projects = () => {

    const {prjId}: any = useParams();

    // fix type here later
    console.log("projects section")
    console.log(typeof prjId)
    // const prj = "Node.js"


    const myProjects = getFilteredProjects(prjId)
    console.log(myProjects)

    useEffect( () => {
        console.log("useEffect")

    }, [prjId])

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [])

    return (
        <section className="projects">  

            {/* TODO back arrow */}
            <h2 className="projects__heading">
                Here are some project(s) that I have worked on 
                {
                    `${prjId  ? " using " + prjId: ""}  `
                }
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