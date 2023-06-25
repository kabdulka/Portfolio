



import "./Skills.scss";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { frontEndData, backendData, languageData } from "../../Data/PieData";
import {  useEffect  } from "react";
import { Link } from 'react-router-dom';

import { techType, frontEndTechs, backEndTechs, languages, futureTech, otherTech} from "../../Data/techStack";

ChartJS.register(ArcElement, Tooltip, Legend);

const Skills = () => {

    useEffect(() => {
        window.scrollTo({top: 90, left: 90, behavior: 'smooth'});
    }, [])

    return (
        <section className={`skills`} >
                <Link 

                    className="skills__back"
                    to="/about"
         
                >
                    Back to About
                </Link>
                <h1 className="skills__heading"> Skills </h1>
         
                <div className="skills__details">
                    <article className="skills__info">
                        <h2 className="skills__title"> Front-End </h2>
                        <div className="skills__chart">
                            <Pie
                                className="skills__chart"
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
                        <div className="skills__chart">
                            <Pie
                                className="skills__chart"
                                data={backendData}/>
                        </div>
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
                        <div className="skills__chart">
                            <Pie
                                className="skills__chart"
                                data={languageData}/>
                        </div>
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
    )
}

export default Skills;