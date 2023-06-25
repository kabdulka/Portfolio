
import './Main.scss';
import { useEffect, useState } from "react";
import Modal from '../Modal/Modal';
import { Link, useNavigate } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';


interface MainProps {
    handleToSkillsClick: () => void
    setCurrentLocation: (input: string) => void
}

const Main = ({handleToSkillsClick, setCurrentLocation}: MainProps) => {

    const [isModalopen, setIsModalopen] = useState<boolean>(false);
    // const refSkills = useRef<null | HTMLElement>(null)
    const navigate = useNavigate();
  
    const handleModalChange = (): void => {
        setIsModalopen(!isModalopen)
    }

    const handleClick = ():void => {
        handleToSkillsClick()
        setCurrentLocation("skills")
        navigate("/about/skills")
        
        // refSkills.current?.scrollIntoView({ behavior: "smooth"})
    }

    // prevent scrolling when modal is open and allow it when modal is closed
    useEffect(() => {
        if (isModalopen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
      }, [isModalopen]);

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [])

    return (
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
                    <Link to="/contact">
                        <EmailIcon />
                    </Link>
                    
                </div>

                <h3 onClick={handleClick} className="main__to-skills"> - My Tech Stack - </h3>
                
            </main>
    )
}

export default Main;
