
import "./Home.scss"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';
import {frontEndTechs, backEndTechs, languages, futureTech, otherTech} from "../../Data/techStack";
import profileImage from "../../assets/images/IMG_5053.jpg";
import { useRef, useEffect } from "react";
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {

    const refSkills = useRef<null | HTMLElement>(null)

    const handleClick = ():void => {
        refSkills.current?.scrollIntoView({behavior: "smooth"})
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [])

   return (
    
        <>
            <main className="main">
                <div className="main__left">

                    <div className="main__image">
                        <img src={profileImage} alt="profile-image" className="main__image-profile" />
                    </div>
                    <div className="main__intro">
                        <h1 className="main__intro-title"> Hello, My name is Kenan </h1>
                    </div>
                </div>
                <div className="main__info">
                {/* <Typical steps={['Hello', 1000, 'World', 500]} loop={Infinity} wrapper="p" /> */}
                    <h3 className="main__info-description"> 
                        Full Stack Developer / Software Developer with a passion for learning and creating
                    </h3>
                </div>
                
            <div
                className="main__about"
                style={{ color: 'rgb(227, 134, 134)', fontWeight: 'bold', fontSize: '1.5rem' }}>
          {/* Style will be inherited from the parent element */}
        
                <Typewriter
                    
                    words={['Full Stack Developer / Software Developer with a passion for learning and creating']}
                    loop={2}
                    cursor
                    cursorStyle='>'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                
                    // onLoopDone={handleDone}
                    // onType={handleType}
                />
            </div>
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
                        <h2 className="skills__title"> Other Technologies/Languages </h2>
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