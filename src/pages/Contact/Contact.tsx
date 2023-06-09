
import "./Contact.scss";
import { ChangeEvent, FormEvent, useState } from "react";
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import emailjs from '@emailjs/browser';
import {useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface formInput {
    name: string
    email: string
    message: string
}

interface contactDetails {
    [key: string] : boolean,
    phone: boolean ,
    email: boolean,
    linkedIn: boolean,
    github: boolean
}

interface formErrorState {
    // [key: string] : boolean,
    nameFieldError: boolean
    emailFieldError: boolean
    messageFieldError: boolean

}

const Contact = () => {

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [])

    function sendEmail (e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();

        emailjs.sendForm('service_a8r638l', 'template_2cg550m', e.currentTarget, '2FwFN-s58a4asB6S6')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.currentTarget.reset();
    }

    const [formSubmitted, setFormSubmitted] = useState<boolean>(false)

    const [contactInfo, setContactInfo] = useState<formInput>({
        name: "",
        email: "",
        message: ""
    });

    const [contactVisibility, setContactVisibility] = useState<contactDetails>({
        phone: false,
        email: false,
        linkedIn: false,
        github: false
    })

    const [formError, setFormError] = useState<formErrorState>({

        nameFieldError: false,
        emailFieldError: false,
        messageFieldError: false,
 
    })

    const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
        const name = event.target.name
        //[key] => [event.target.name]

        // obj = {name: "ken", age: 20}
        // obj["name"] => 'ken'
        // obj.name => 'ken'

        setContactInfo({...contactInfo, [name]: event.target.value})
    }

    const handleVisibilityChange = (key: string):void => {
        // setPhoneNumVisible(!phoneNumvisible)
        setContactVisibility({...contactVisibility, [key]: !contactVisibility[key] })
        // setContactVisibility({...contactVisibility, [key]: true  })
    }

    const handleSubmit = (event : FormEvent<HTMLFormElement>) => {
        
            
        event.preventDefault();
        let formComplete: boolean = true;
        // setFormError({...formError, ["nameFieldError"]: false, ["emailFieldError"]: false, ["messageFieldError"]: false })
        
        let localErrorState:formErrorState = {
            nameFieldError: false,
            emailFieldError: false,
            messageFieldError: false
        }
        
        if (contactInfo.name === "") {
            formComplete = false
            localErrorState.nameFieldError = true

        } 
  
        if (contactInfo.email === "") {
            formComplete = false
            localErrorState.emailFieldError = true
        } 

        if (contactInfo.message === "") {
            formComplete = false
            localErrorState.messageFieldError = true
        } 

        setFormError(localErrorState);

        if (formComplete) {

            console.log(contactInfo)

            alert("Form Submitted")
            setFormSubmitted(!formSubmitted)
            sendEmail(event)
            setContactInfo({
                name: "",
                email: "",
                message: ""
            });
            setTimeout(() => {

                navigate(0)
                // console.log("here")
            }, 7000)
        } else {
            // form not complete with error states
            return;
        }

    }

    return(

        <section className="contact">

            <h2 className="contact__header"> Got a question? Or do you just want to say hi? 👋 </h2>
            <h2 className="contact__sub-header"> Feel free to reach out! </h2>

            <div className="contact__divider">


                <form onSubmit={handleSubmit} className="form">

                    <div className="form__contact">
                        <label htmlFor="name"> Your Name </label>
                        <input 
                            name="name" 
                            id="name"
                            placeholder="Enter your name *"
                            type="text" 
                            className="form__contact-name" 
                            value={contactInfo.name}
                            onChange={handleInputChange}
                        />
                        <p className={`${formError.nameFieldError === true ? "form__contact-error--visible" : "form__contact-error"}`}> Please provide your name </p>
                    </div>

                    <div className="form__contact">
                        <label htmlFor="email"> Email Address </label>
                        <input 
                            name="email" 
                            id="email"
                            type="email"
                            placeholder="Enter your email *" 
                            className="form__contact-email"
                            value={contactInfo.email}
                            onChange={handleInputChange}
                        />
                        <p className={`${formError.emailFieldError === true ? "form__contact-error--visible" : "form__contact-error"}`}> Please provide a valid email </p>
                    </div>
                    
                    <div className="form__contact">
                        <label htmlFor="message"> What would you like to tell me? </label>
                        <textarea 
                            name="message" 
                            id="message"
                            placeholder="Type your message *"
                            className="form__contact-message"
                            value={contactInfo.message}
                            onChange={handleInputChange}
                        />
                        <p className={`${formError.messageFieldError === true ? "form__contact-error--visible" : "form__contact-error"}`}> 
                            Are you sure there's nothing you wanna tell me? Even feedback on this site would be nice {";)"}
                        </p>
                    </div>

                    <div className="form__contact form__contact--button">
                        <button 
                            name="button" 
                            className="form__contact-button"

                        >
                            SUBMIT
                        </button>
                    </div>

                    <p className={`${formSubmitted ? "form__submitted" : "form__submitted--hidden"}`}> 
                        Awesome! Your message has been sent!
                        The page will refresh in a 7 seconds!
                        
                    </p>

                    {/* <div className="form__border">

                    </div> */}
                
                </form>

                <div className="form__border">
                    <div className="form__border--inner">

                    </div>
                </div>

                <article className="contact__me">

                    <div className="contact__me__divider">

                        <div className="contact__details">
                            <div className="contact__details-info" onClick={()=>{handleVisibilityChange("phone")}}>
                                <PhoneIcon></PhoneIcon>
                                <p className="contact__phone-header"> Call Me </p> 
                            </div>
                            <p className={`${contactVisibility.phone ? "" : "contact__info--hidden"}`} > 604-442-6525 </p>
                        </div>

                        <div className="contact__details">
                            <div className="contact__details-info" onClick={()=>{handleVisibilityChange("email")}}>
                                <EmailIcon></EmailIcon>
                                <p className="contact__email-header"> Email Me </p> 
                            </div>
                            <p className={`${contactVisibility.email ? "" : "contact__info--hidden"}`} > kenabdulka@gmail.com </p>
                        </div>

                        <div className="contact__details">
                            <div className="contact__details-info"onClick={() => {handleVisibilityChange("linkedIn")}}>
                                <LinkedInIcon></LinkedInIcon>
                                <p className="contact__linkedIn-header"> Let's Connect on LinkedIn </p> 
                            </div>
                            <div className={`${contactVisibility.linkedIn ? "" : "contact__info--hidden"}`} > 
                                
                                    <a className="contact__info-link" href="https://www.linkedin.com/in/kenan-abdulkarim">
                                    {/* <span> */}
                                        https://www.linkedin.com/in/kenan-abdulkarim
                                    {/* </span> */}
                                    </a>
                            </div>
                        </div>
                        <div className="contact__details">
                            <div className="contact__details-info" onClick={()=>{handleVisibilityChange("github")}}>
                                <GitHubIcon></GitHubIcon>
                                <p className="contact__email-header"> Follow me on Github </p> 
                            </div>
                            <div className={`${contactVisibility.github ? "" : "contact__info--hidden"}`} >

                                 <a className="contact__info-link" href="https://github.com/kabdulka ">
                                    {/* <span> */}
                                    https://github.com/kabdulka 
                                    
                                    {/* </span> */}
                                </a>
                            
                            </div>
                        </div>

                    </div>
                </article>

            </div>
            
        </section>
    );
}

export default Contact;