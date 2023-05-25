
import "./Contact.scss";

const Contact = () => {

    return(
        <section className="contact">
            <form action="submit" className="form">
                <label htmlFor="name"> Name </label>
                <input name="name" type="text" className="form__contact-name" />
                <label htmlFor="message"> Message </label>
                <textarea name="message"  className="form__contact-message" />
            </form>
            
          

        </section>
    );
}

export default Contact;