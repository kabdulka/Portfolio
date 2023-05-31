
import "./Contact.scss";
import { ChangeEvent, FormEvent, useState } from "react";
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import emailjs from '@emailjs/browser';


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

// TODO
interface formErrorState {
    // [key: string] : boolean,
    nameFieldError: boolean
    emailFieldError: boolean
    messageFieldError: boolean

}

const Contact = () => {

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
            sendEmail(event)
            setContactInfo({
                name: "",
                email: "",
                message: ""
            });
        
        } else {
            // form not complete with error states
            return;
        }

    }

    // const handleFormValidation = (event: FormEvent<HTMLFormElement>):void => {

    //     // console.log(event.target)
    //     // const {name, email, message} = event.target
    //     // if (name === "") {
    //     //     console.log("Please enter name")
    //     //     return;
    //     // }



    //     console.log(event)
    // }

    return(

        <section className="contact">

            <h2 className="contact__header"> What would you like to ask? </h2>
            
            <div className="contact__divider">


                <form onSubmit={handleSubmit} className="form">

                    <div className="form__contact">
                        <label htmlFor="name"> Name </label>
                        <input 
                            name="name" 
                            id="name"
                            type="text" 
                            className="form__contact-name" 
                            value={contactInfo.name}
                            onChange={handleInputChange}
                        />
                        <p className={`${formError.nameFieldError === true ? "form__contact-error--visible" : "form__contact-error"}`}> Please provide your name </p>
                    </div>

                    <div className="form__contact">
                        <label htmlFor="email"> Please enter your email </label>
                        <input 
                            name="email" 
                            id="email"
                            type="email" 
                            className="form__contact-email"
                            value={contactInfo.email}
                            onChange={handleInputChange}
                        />
                        <p className={`${formError.emailFieldError === true ? "form__contact-error--visible" : "form__contact-error"}`}> Please provide a valid email </p>
                    </div>
                    
                    <div className="form__contact">
                        <label htmlFor="message"> Message </label>
                        <textarea 
                            name="message" 
                            id="message"
                            className="form__contact-message"
                            value={contactInfo.message}
                            onChange={handleInputChange}
                        />
                        <p className={`${formError.messageFieldError === true ? "form__contact-error--visible" : "form__contact-error"}`}> Please type a message </p>
                    </div>

                    <div className="form__contact form__contact--button">
                        <button 
                            // type="submit"
                            name="button" 
                            className="form__contact-button"
                            // value={contactInfo.message}
                            // onChange={handleInputChange}
                        >
                            Submit
                        </button>
                    </div>

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
                                <p className="contact__phone-header"> phone number </p> 
                            </div>
                            <p className={`${contactVisibility.phone ? "" : "contact__info--hidden"}`} > 604-442-6525 </p>
                        </div>

                        <div className="contact__details">
                            <div className="contact__details-info" onClick={()=>{handleVisibilityChange("email")}}>
                                <EmailIcon></EmailIcon>
                                <p className="contact__email-header"> Email </p> 
                            </div>
                            <p className={`${contactVisibility.email ? "" : "contact__info--hidden"}`} > kenabdulka@gmail.com </p>
                        </div>

                        <div className="contact__details">
                            <div className="contact__details-info"onClick={() => {handleVisibilityChange("linkedIn")}}>
                                <LinkedInIcon></LinkedInIcon>
                                <p className="contact__linkedIn-header"> LinkedIn </p> 
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
                                <p className="contact__email-header"> Github </p> 
                            </div>
                            <div className={`${contactVisibility.github ? "" : "contact__info--hidden"}`} >

                                 <a className="contact__info-link" href="https://github.com/kabdulka ">
                                    {/* <span> */}
                                    https://github.com/kabdulka 
                                    
                                    {/* </span> */}
                                </a>
                            
                            </div>
                        </div>

                        {/* <div className="contact__details" onClick={handleVisibilityChange}>
                            <div className="contact__details-info">
                                <PhoneIcon></PhoneIcon>
                                <p className="contact__linkedIn-header"> LinkedIn </p> 
                            </div>
                            <p className={`${phoneNumvisible ? "contact__linkedIn--visible" : "contact__linkedIn--hidden"}`} > 604-442-6525 </p>
                        </div> */}

                    </div>
                </article>

            </div>
            
        </section>
    );
}

export default Contact;