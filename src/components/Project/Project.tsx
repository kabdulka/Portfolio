import { CSSProperties, useState } from "react"
import "./Project.scss"
import { Link } from "react-router-dom"

interface ProjectProps {
    image: string
    name: string
    description: string
    github: string
    githubUrlFE: string
    skills: string
}

const Project = ({image, skills, name, description, github, githubUrlFE}: ProjectProps) => {

    const [clicked, setClicked] = useState<boolean>(false);

    const handleProjectClick = (): void => {
        setClicked(prev => !prev)
    }

    // CSS properties
    const projectBGStyle: CSSProperties = {
        backgroundImage: `url(${image})`,
        // objectFit: `cover`,
        // backgroundSize: "100% 100%",
        // backgroundPosition: "100% 100%",
        // backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top",
 
    }

    return (

        <li onClick={handleProjectClick}  className={`project__item ${clicked ? "clicked" : ""}`}>
            <div className="project__front-face">

                <div style={projectBGStyle} className="project__item__background">

                </div>
                <div className="project__item__title-wrapper">

                    <h1 className="project__item__title">
                        {name}
                    </h1>
                </div>
            </div>
            <div className="project__back-face">
                <p className="project__back-face__desc">
                    {description}
                </p>

                <div className="project__back-face__skills">
                    <span className="skills-title"> TECHNOLOGIES USED:  </span> 
                        <div className="skills__container">

                            {
                                skills.split(",").map((skill)=> {
                                    return <span className="skills-value"> {skill} </span>
                                })
                            } 
                        </div>
                     
                </div>
            {/* </div> */}
                <Link className="project__back-face__ghub" to={`${githubUrlFE}`}>
                    {/* <p > */}
                        {github}
                    {/* </p> */}
                </Link>
           
            </div>
        </li>
    )
}

export default Project;