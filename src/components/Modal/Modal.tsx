
import "./Modal.scss"
import profileImage from "../../assets/images/profileMain.jpeg"
import { Typewriter } from 'react-simple-typewriter'
// import profilePicture from "../../assets/images/profileImage.jpg"

interface ModalProps {
    handleModalChange: () => void
}

const Modal = ({handleModalChange}: ModalProps) => {


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
                    <div className="modal__hobbies">
                        <h3 className="modal__hobbies-title">Hobbies</h3>
                        <p className="modal__hobbies-desc">
                        ⚽ 🏓 🏋️‍♂️ 👨‍💻 🏃‍♂️🏕️ ☕ 🍝 🎵
                        </p>
                    </div>
                </div>
                <div
                    className="modal__currently"
                    >
            
                    <Typewriter
                        
                        words={['I am Full Stack Developer / Software Developer with a passion for learning and creating', ""]}
                        loop={1}
                        cursor
                        cursorStyle='>'
                        typeSpeed={30}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    
                        // onLoopDone={handleDone}
                        // onType={handleType}
                    />
                </div>
                <div
                    className="modal__story"
                >
                    <Typewriter
                        
                        words={[`I haven't always been tech enthusiast`, `In fact, When I was younger, my dream was to make it pro in ⚽`, `I even made it to the Whitecaps youth team`, `Unfortunately, injuries got in the way of my dream 😔`]}
                        loop={1}
                        cursor
                        cursorStyle='>'
                        typeSpeed={50}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    
                        // onLoopDone={handleDone}
                        // onType={handleType}
                    />
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