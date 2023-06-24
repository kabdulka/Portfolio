
import "./Home.scss"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';
import { techType, frontEndTechs, backEndTechs, languages, futureTech, otherTech} from "../../Data/techStack";
import { useRef, useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";

import { Stack, Typography } from "@mui/material"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { PieChart } from "@mui/icons-material";

ChartJS.register(ArcElement, Tooltip, Legend);


const frontEndData = {
    labels: ['React', 'Vite', 'Axios', 'SASS', 'CSS', 'HTML'],

    datasets: [
      {
        label: 'frontend technology ration',
        data: [5, 3, 4, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

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
          document.body.style.overflow = 'auto';
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
                        Get to know me!
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

            <section className={`skills ${isModalopen ? "skills__modal--open" : ""}`} ref={refSkills}>

                <h1 className="skills__heading"> Skills </h1>
         
                <div className="skills__details">
                    <article className="skills__info">
                        <h2 className="skills__title"> Front-End </h2>
                        <div className="skills_chart">
                            <Pie 
                                style={{width: "200px"}}
                                data={frontEndData}/>
                        </div>
                        <div className="skills__list">

                            {
                                frontEndTechs.map((skill: techType, index: number) => {
                                        const Icon = skill.icon;
                                        return (
                                            <Link 
                                                className="skills__value"
                                                to={`/projects/${skill.name}`}
                                                key={index}
                                            >
                                                <span className="skills__icon"> <Icon /> </span>
                                                <span className="skills__name"> {skill.name} </span>
                                            </Link>
                                        )
                                    }
                                )
                            }
                        </div>
                       
                    </article>
                    <article className="skills__info">
                        <h2 className="skills__title"> Back-End </h2>

                        <div className="skills__list">

                            {
                                backEndTechs.map((skill: techType, index: number) => {
                                    const Icon = skill.icon;
                                    return (
                                        <Link 
                                    
                                            className="skills__value"
                                            to={`/projects/${skill.name}`}
                                            key={index}
                                        >
                                            <span 
                                                className="skills__icon skills__icon--backEnd"> <Icon /> 
                                            
                                            </span>
                                            <span 
                                                className="skills__name"
                                          
                                            > 
                                                {skill.name} 
                                            </span>
                                        </Link>
                                    )
                                }
                                )
                            }
                        </div>
                        
                    </article>
                    <article className="skills__info">
                        <h2 className="skills__title"> Languages </h2>
                        <div className="skills__list">

                            {
                                languages.map((skill: techType, index: number) => {
                                        const Icon = skill.icon
                                        return (
                                            <Link 
                                                className="skills__value"
                                                to={`/projects/${skill.name}`}
                                                key={index}
                                            >
                                                <span className="skills__icon"> <Icon /> </span>
                                                <span className="skills__name"> {skill.name} </span>
                                            </Link>
                                        )
                                    }
                                )
                            }
                        </div>
                    </article>

                    <article className="skills__info">
                        <h2 className="skills__title"> Other Technologies </h2>
                        <div className="skills__list">

                            {
                                otherTech.map((skill: string, index: number) => 
                                    
                                    <span key={index} className="skills__name--inactive"> {skill} </span>
                                )
                            }
                        </div>
                    </article>

                    <article className="skills__info">
                        <h2 className="skills__title"> What am I learning these days? </h2>
                        <div className="skills__list">

                            {
                                futureTech.map((skill: techType, index: number) => {
                                    const Icon = skill.icon;
                                    return (
                                        <div 
                                            key={index}
                                            className="skills__value--inactive"
                                        >

                                            <span className="skills__icon"> <Icon /> </span>
                                            <span 
                                                className="skills__name"
                                            > 
                                                {skill.name}
                                            </span>
                                        </div>
                                    )
                                }
                                    
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