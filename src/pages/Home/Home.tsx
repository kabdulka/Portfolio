
import "./Home.scss"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';
import {frontEndTechs, backEndTechs, languages} from "../../Data/techStack";


const formattedFrontEndData: string = frontEndTechs.join(", ");
const formattedBackEndData: string = backEndTechs.join(", ");
const formattedLanguages: string = languages.join(", ");


const Home = () => {

   return (
        <>
            <main className="main">
                <div className="main__intro">
                    <h1 className="main__intro-title"> Hello, My name is Kenan </h1>
                </div>
                <div className="main__info">
                    <h3 className="main__info-description"> 
                        A software developer with a passion for learning and creating
                    </h3>
                </div>
                <div className="main__icons">
                    <Link to="https://www.linkedin.com/in/kenan-abdulkarim">
                        <LinkedInIcon />
                    </Link>
                    <Link to="https://github.com/kabdulka">
                        <GitHubIcon />
                    </Link>
                    <Link to="https://mail.google.com/">
                        <EmailIcon />
                    </Link>
                    
                </div>
                
            </main>

            <section className="skills">

                <h1 className="skills__heading"> Skills </h1>

                <div className="skills__details">
                    <article className="skills__info">
                        <h2 className="skills__title"> Front-End </h2>
                        {/* <ul className="skills__frontend-list">
                            {
                                frontEndTechs.map((element: string) => 
                                    <li className="skills__frontend-item">
                                        {element}
                                    </li>
                                )
                            }
                        </ul> */}
                        <span className="skills__value"> {formattedFrontEndData} </span>
                    </article>
                    <article className="skills__info">
                        <h2 className="skills__title"> Back-End </h2>
                        <span className="skills__value"> {formattedBackEndData} </span>
                    </article>
                    <article className="skills__info">
                        <h2 className="skills__title"> Languages </h2>
                        <span className="skills__value"> {formattedLanguages} </span>
                    </article>
                </div>

            </section>
            
        </>

   )
    
}

export default Home;