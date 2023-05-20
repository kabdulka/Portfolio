import { CSSProperties } from "react"
import "./Project.scss"

interface ProjectProps {
    image: string
    name: string
}

const Project = ({image, name}: ProjectProps) => {

    // CSS properties
    const projectBGStyle: CSSProperties = {
        backgroundImage: `url(${image})`,
        // objectFit: `cover`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",

        // backgroundColor: "blue"
    }

    return (

        <li  className="project__item">
            <div style={projectBGStyle} className="project__item__background">

            </div>
            <div className="project__item__title-wrapper">

                <h1 className="project__item__title">
                    {name}
                </h1>
            </div>
        </li>
    )
}

export default Project;