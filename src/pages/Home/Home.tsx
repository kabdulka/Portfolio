
import "./Home.scss"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';
import {frontEndTechs, backEndTechs, languages, futureTech, otherTech} from "../../Data/techStack";
// import profileImage from "../../assets/images/IMG_5053.jpg";
import { useRef, useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";

const Home = () => {

    const refSkills = useRef<null | HTMLElement>(null)

    const [isModalopen, setIsModalopen] = useState<boolean>(false)

    const handleClick = ():void => {
        refSkills.current?.scrollIntoView({behavior: "smooth"})
    }

    const handleModalChange = (): void => {
        setIsModalopen(!isModalopen)
    }

    // automatic scroll to the top on page mount
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [])

    // prevent scrolling when modal is open and allow it when modal is closed
    useEffect(() => {
        if (isModalopen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'unset';
        }
      }, [isModalopen]);

   return (
    
        <>
            <main className={`main ${isModalopen ? "main__modal--open" : ""}`}>
                <div className="main__left">

                    <div className="main__image">
                        {/* <img src={profileImage} alt="profile-image" className="main__image-profile" /> */}
                    </div>
                    <div className="main__intro">
                        <h1 className="main__intro-title"> Hello! I'm Kenan  </h1>
                        <span className="main__intro-wave">👋</span>
                    </div>
                </div>
                <div className="main__info" onClick={handleModalChange}>
                    <button className="main__info-about"> 
                        A bit about me
                    </button>
                </div>


                {isModalopen === true && <Modal handleModalChange={handleModalChange}/>}
            
                <div className="main__icons">
                    <Link to="https://www.linkedin.com/in/kenan-abdulkarim">
                        <LinkedInIcon />
                    </Link>
                    <Link to="https://github.com/kabdulka">
                        <GitHubIcon />
                    </Link>
                    <Link to="/contact
                    ">
                        <EmailIcon />
                    </Link>
                    
                </div>

                <h3 onClick={handleClick} className="main__to-skills"> - See Technologies I've used - </h3>
                
            </main>

            <section className="skills" ref={refSkills}>

                <h1 className="skills__heading"> Skills </h1>

                <div className="skills__details">
                    <article className="skills__info">
                        <h2 className="skills__title"> Front-End </h2>

                        <div className="skills__list">

                            {
                                frontEndTechs.map((skill: string, index: number) => 
                                    
                                    <Link 
                                        className="skills__value"
                                        to={`/projects/${skill}`}
                                        key={index}
                                    >
                                        <span> {skill} </span>
                                    </Link>
                                )
                            }
                        </div>
                       
                    </article>
                    <article className="skills__info">
                        <h2 className="skills__title"> Back-End </h2>

                        <div className="skills__list">

                            {
                                backEndTechs.map((skill: string, index: number) => 
                                    <Link 
                                
                                        className="skills__value"
                                        to={`/projects/${skill}`}
                                        key={index}
                                    >
                                        <span> {skill} </span>
                                    </Link>
                                )
                            }
                        </div>
                        
                    </article>
                    <article className="skills__info">
                        <h2 className="skills__title"> Languages </h2>
                        <div className="skills__list">

                            {
                                languages.map((skill: string, index: number) => 
                                    
                                    <Link 
                                        className="skills__value"
                                        to={`/projects/${skill}`}
                                        key={index}
                                    >
                                        <span> {skill} </span>
                                    </Link>
                                )
                            }
                        </div>
                    </article>

                    <article className="skills__info">
                        <h2 className="skills__title"> Other Technologies </h2>
                        <div className="skills__list">

                            {
                                otherTech.map((skill: string, index: number) => 
                                    
                                    <span key={index} className="skills__value"> {skill} </span>
                                )
                            }
                        </div>
                    </article>

                    <article className="skills__info">
                        <h2 className="skills__title"> What am I learning these days? </h2>
                        <div className="skills__list">

                            {
                                futureTech.map((skill: string, index: number) => 
                                    
                                    <span key={index} className="skills__value"> {skill} </span>
                                )
                            }
                        </div>
                    </article>
                </div>

            </section>

            
            
        </>

   )
    
}

export default Home;