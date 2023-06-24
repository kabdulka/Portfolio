
import "./Modal.scss"
import profileImage from "../../assets/images/profileMain.jpeg"
import { Typewriter } from 'react-simple-typewriter'
import { useState } from "react"
import CloseIcon from '@mui/icons-material/Close';

interface ModalProps {
    handleModalChange: () => void
}

const Modal = ({handleModalChange}: ModalProps) => {

    const [toggleMyStory, setToggleMyStory] = useState<boolean>(false)

    

    return (

        <>
            <section className={`modal`}>
                <div className="modal__header">
                    <div className="modal__header--top">
                        <h2 className="modal__header-title">
                            About me
                        </h2>
                        <CloseIcon 
                            className="modal__header--x"
                            onClick={handleModalChange}
                        />

                    </div>

                    <div className="modal__header-content">
                        <img
                            src={profileImage} 
                            className="modal__profile-img"
                        />
                    
                    <div className="modal__header-content--inner">

                        <p className="modal__currently"> 
                            I am a Full Stack Developer / Software Developer who enjoys learning, creating and seeing my solutions come to life 
                        </p>

                        <div className="modal__hobbies">
                            <h3 className="modal__hobbies-title">Hobbies</h3>

                            <div className="modal__hobbies-wrapper">
                                <div className="modal__hobbies-container">
                                    <span> ⚽ </span> 
                                    <span className="modal__hobbies-text">Soccer Player</span>
                                </div>  
                                <div className="modal__hobbies-container">
                                    <span> 🏓 </span> 
                                    <span className="modal__hobbies-text">Ping Pong Pro!</span>
                                </div> 
                                <div className="modal__hobbies-container">
                                    <span> 🏋️‍♂️ </span> 
                                    <span className="modal__hobbies-text">Weight Lifter</span>
                                </div> 
                                <div className="modal__hobbies-container">
                                    <span> 👨‍💻 </span> 
                                    <span className="modal__hobbies-text">Tech Enthusiast</span>
                                </div> 
                                <div className="modal__hobbies-container">
                                    <span> 🏃‍♂️ </span> 
                                    <span className="modal__hobbies-text">Always Running</span>
                                </div> 
                                <div className="modal__hobbies-container">
                                    <span> 🏕️ </span> 
                                    <span className="modal__hobbies-text">Outdoor lover</span>
                                </div> 
                                <div className="modal__hobbies-container">
                                    <span> ☕ </span> 
                                    <span className="modal__hobbies-text">Coffee addict</span>
                                </div> 
                                <div className="modal__hobbies-container">
                                    <span> 🍝 </span> 
                                    <span className="modal__hobbies-text">Foodie</span>
                                </div> 
                                <div className="modal__hobbies-container">
                                    <span> 🎵 </span> 
                                    <span className="modal__hobbies-text">Music</span>
                                </div> 
                                

                                  
                            </div>
                        </div>

                    </div>
                            
                    </div>
                </div>
               
             
                <div
                    className="modal__story-wrapper"
                  
                >
                
                    <h2 
                        className="modal__story-title"
                        onClick={() => {setToggleMyStory(prev => !prev)}}
                        > 
                        My story:
                        {
                            toggleMyStory === false &&
                            <Typewriter
                            
                                words={[``]}
                                loop={1}
                                cursor
                                cursorStyle='<--'
                                typeSpeed={35}
                                deleteSpeed={30}
                                delaySpeed={2000}
                            />

                        }
                    </h2>
                    {
                        toggleMyStory === true &&
                    <div
                        className="modal__story"
                    >
                    <Typewriter
                        
                        words={[`When I was younger, my dream was to make it pro in ⚽. I even made it to the Whitecaps youth team. 
                                Unfortunately, injuries and our inability to travel to Europe at the time got in the way of my dream 😔. 
                                However, my curiosity for how one can envision and make games such as FIFA come to life made me decide to enroll in a highschool programming class in my final year of school.
                                But.. classes were full :(. 
                                Seeing no way to enroll in the course, I convinced the teacher to lend me the course material so I can learn on my own.
                                It was a struggle and I quit many times, but for some reason, I always came back.
                                I remember that feeling that I had when I made my first variable print to the console.
                                At that moment, I realized that I have discovered a new passion.`
                            ]}
                        loop={1}
                        cursor
                        cursorStyle='>'
                        typeSpeed={35}
                        deleteSpeed={30}
                        delaySpeed={2000}
                    
                    />
                    </div>
                    }
                </div>
                

            <div className="modal__close">

                <button 
                    className="modal__close-btn"
                    onClick={handleModalChange}
                >
                    Close
                </button>
            </div>
            </section>
        </>

    );
}

export default Modal