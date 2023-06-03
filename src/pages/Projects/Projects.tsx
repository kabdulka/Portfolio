
import Project from "../../components/Project/Project";
import "./Projects.scss";
import myProjects from "../../Data/ProjectsInfo"
import { useParams } from "react-router-dom";
import { useEffect } from "react";
//    window.location.reload()

// interface ProjectsProp {
//     projectSelection: string
// }

interface ProjectType {
    // name: "Portfolio Website",
    // image: portfolio,
    // skills: "React, Typescript, Axios, SASS, BEM",
    // description: "This website is my portfolio website that has been developed using React and Typescript. It is a work in progress as I am constantly trying to improve it. Feel free to leave me a feedback!",
    // github: "Github Repo",
    // githubUrlFE: "https://github.com/kabdulka/Portfolio",
    name: string
    image: string
    skills: string
    description: string
    github: string
    githubUrlFE: string
}

// interface ProjectsType {
//     projects: ProjectType[]
// }

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

    // return [{}]
}

const Projects = () => {

    const {prjId}: any = useParams();
    // const [projectId, setProjectId] = useState<string>(prjId)

    // fix type here later
    console.log("projects section")
    console.log(typeof prjId)
    // const prj = "Node.js"


    const myProjects = getFilteredProjects(prjId)
    console.log(myProjects)

    useEffect( () => {
        console.log("useEffect")
        // refresh page
        // window.location.reload()
        // setProjectId(prjId)
    }, [prjId])

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [])

    return (
        <section className="projects">  

            <h2 className="projects__heading">
                What have I worked on?
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