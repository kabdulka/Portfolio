
import "./Home.scss"

import { useRef, useEffect, useState } from "react";


import Main from "../../components/Main/Main";
import Skills from "../../components/Skills/Skills";
import { useLocation } from "react-router-dom";

const Home = () => {

    const refSkills = useRef<HTMLDivElement | null>(null)

    const [currentlocation, setCurrentLocation] = useState<string>("")
    const location = useLocation();
    console.log(location.pathname)

    const handleHomeSection = (location: string): string => {

        if (location === "/about") {
            return "about"
        } else if (location === "/main") {
            
            return "main"
        }
        return "skills"
    }

    useEffect(() => {
        setCurrentLocation(handleHomeSection(location.pathname));
    }, [location])
 
    const handleToSkillsClick = (): void => {
        refSkills.current?.scrollIntoView({behavior: "smooth" })
        // setCurrentLocation("skills")
    }

   return (
    
        <>
            {
                currentlocation === "main" || currentlocation === "about" && 
                <Main 
                    handleToSkillsClick={handleToSkillsClick}
                    setCurrentLocation={setCurrentLocation}
                /> 
            }
  
            {    
                
                    
                   currentlocation === "skills" && 
                   <div ref={refSkills}> 
                        <Skills />
                  
                    </div>
            }
            {/* <section className={`skills`} ref={refSkills}>

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

            
             */}
        </>

   )
    
}

export default Home;