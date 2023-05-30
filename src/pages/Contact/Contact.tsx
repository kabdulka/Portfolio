
import "./Contact.scss";
import { ChangeEvent, FormEvent, useState } from "react";
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

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
    phoneFieldError: boolean
    emailFieldError: boolean
    linkedInFieldError: boolean
    githubFieldError: boolean
}

const Contact = () => {

    const [contactInfo, setContactInfo] = useState<formInput>({
        name: "",
        email: "",
        message: ""
    });

    const [contactVisibility, setVontactVisibility] = useState<contactDetails>({
        phone: false,
        email: false,
        linkedIn: false,
        github: false
    })

    const [formError, setFormError] = useState<formErrorState>({
        phoneFieldError: false,
        emailFieldError: false,
        linkedInFieldError: false,
        githubFieldError: false
    })

    const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
        const name = event.target.name
        //[key] => [event.target.name]

        // obj = {name: "ken", age: 20}
        // obj["name"] => 'ken'
        // obj.name => 'ken'

        setContactInfo({...contactInfo, [name]: event.target.value})
    }

    const handlePhoneNumChange = (key: string):void => {
        // setPhoneNumVisible(!phoneNumvisible)
        setVontactVisibility({...contactVisibility, [key]: !contactVisibility[key] })
        // setVontactVisibility({...contactVisibility, [key]: true  })
    }

    const handleSubmit = (event : FormEvent<HTMLFormElement>) => {
        let formComplete: boolean = true;

        event.preventDefault();
       
        // console.log("event")
        if (contactInfo.name === "") {
            alert("fill in your name")
            formComplete = false
        }
        if (contactInfo.email === "") {
            alert("email")
            formComplete = false
        }
        if (contactInfo.message === "") {
            alert("message")
            formComplete = false
        }

        if (formComplete) {
            console.log(contactInfo)
        } else {
            return;
        }

        handleFormValidation(event)
    }

    const handleFormValidation = (event: FormEvent<HTMLFormElement>):void => {
        // console.log(event.target)
        // const {name, email, message} = event.target
        // if (name === "") {
        //     console.log("Please enter name")
        //     return;
        // }
        
    }

    return(

        <section className="contact">

            <h2 className="contact__header"> What would you like to ask? </h2>
            
            <div className="contact__divider">


                <form onSubmit={handleSubmit} className="form">

                    <div className="form__contact">
                        <label htmlFor="name"> Name </label>
                        <input 
                            name="name" 
                            type="text" 
                            className="form__contact-name" 
                            value={contactInfo.name}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form__contact">
                        <label htmlFor="email"> Please enter your email </label>
                        <input 
                            name="email" 
                            type="email" 
                            className="form__contact-email"
                            value={contactInfo.email}
                            onChange={handleInputChange}
                        />  
                    </div>
                    
                    <div className="form__contact">
                        <label htmlFor="message"> Message </label>
                        <textarea 
                        
                            name="message" 
                            className="form__contact-message"
                            value={contactInfo.message}
                            onChange={handleInputChange}
                        />
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
                            <div className="contact__details-info" onClick={()=>{handlePhoneNumChange("phone")}}>
                                <PhoneIcon></PhoneIcon>
                                <p className="contact__phone-header"> phone number </p> 
                            </div>
                            <p className={`${contactVisibility.phone ? "" : "contact__info--hidden"}`} > 604-442-6525 </p>
                        </div>

                        <div className="contact__details">
                            <div className="contact__details-info" onClick={()=>{handlePhoneNumChange("email")}}>
                                <EmailIcon></EmailIcon>
                                <p className="contact__email-header"> Email </p> 
                            </div>
                            <p className={`${contactVisibility.email ? "" : "contact__info--hidden"}`} > kenabdulka@gmail.com </p>
                        </div>

                        <div className="contact__details">
                            <div className="contact__details-info"onClick={() => {handlePhoneNumChange("linkedIn")}}>
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
                            <div className="contact__details-info" onClick={()=>{handlePhoneNumChange("github")}}>
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

                        {/* <div className="contact__details" onClick={handlePhoneNumChange}>
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