
import "./Modal.scss"
import profileImage from "../../assets/images/profileMain.jpeg"
import { Typewriter } from 'react-simple-typewriter'
import { useState } from "react"
// import profilePicture from "../../assets/images/profileImage.jpg"

interface ModalProps {
    handleModalChange: () => void
}

const Modal = ({handleModalChange}: ModalProps) => {

    const [toggleMyStory, setToggleMyStory] = useState<boolean>(false)

    

    return (

        <>
            <section className={`modal`}>
                <div className="modal__header">

                    <h2 className="modal__header">
                        About me
                    </h2>
                    <img
                        src={profileImage} 
                        className="modal__profile-img"
                    />
                 </div>

                <div
                    className="modal__currently"
                    >
        
                    {/* <Typewriter
                        
                        words={['I am a Full Stack Developer / Software Developer who enjoys learning and creating and seeing my solutions come to life']}
                        loop={1}
                        cursor
                        cursorStyle='>'
                        typeSpeed={30}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    
                        // onLoopDone={handleDone}
                        // onType={handleType}
                    /> */}
                    <p> I am a Full Stack Developer / Software Developer who enjoys learning, creating and seeing my solutions come to life </p>
                </div>

                <div className="modal__hobbies">
                    <h3 className="modal__hobbies-title">Hobbies</h3>
                    <p className="modal__hobbies-desc">
                        ⚽ 🏓 🏋️‍♂️ 👨‍💻 🏃‍♂️🏕️ ☕ 🍝 🎵
                    </p>
                </div>
               
             
                <div
                    className="modal__story-wrapper"
                  
                >
                    <h2 
                        className="modal__story-title"
                        onClick={() => {setToggleMyStory(prev => !prev)}}
                        > 
                        My story:
                    </h2>
                    {
                        toggleMyStory === true &&
                    <div
                        className="modal__story"
                    >
                    <Typewriter
                        
                        // words={[`I haven't always been tech enthusiast`, `In fact, When I was younger, my dream was to make it pro in ⚽`, `I even made it to the Whitecaps youth team`, `Unfortunately, injuries got in the way of my dream 😔`]}
                        words={[`When I was younger, my dream was to make it pro in ⚽`, `I even made it to the Whitecaps youth team`, 
                                `Unfortunately, injuries and our inability to travel to Europe at the time got in the way of my dream 😔`, 
                                `However, my curiosity for how one can envision and make games such as FIFA come to life made me decide to enroll in a highschool programming class in my final year of school`,
                                `But.. classes were full :(.`, 
                                `Seeing no way to enroll in the course, I convinced the teacher to lend me the course material so I can learn on my own`,
                                `It was a struggle and I quit many times, but for some reason, I always came back.`,
                                `I remember that feeling that I had when I made my first variable print to the console.`,
                                `At that moment, I realized that I have discovered a new passion.`
                            ]}
                        loop={1}
                        cursor
                        cursorStyle='>'
                        typeSpeed={35}
                        deleteSpeed={30}
                        delaySpeed={2000}
                    
                        // onLoopDone={handleDone}
                        // onType={handleType}
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