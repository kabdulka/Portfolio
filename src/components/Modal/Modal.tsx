
import "./Modal.scss"
import { Typewriter } from 'react-simple-typewriter'

interface ModalProps {
    handleModalChange: () => void
}

const Modal = ({handleModalChange}: ModalProps) => {


    return (

        <>
            <section className={`modal`}>
                <h2 className="modal__header">
                    modal open
                </h2>
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