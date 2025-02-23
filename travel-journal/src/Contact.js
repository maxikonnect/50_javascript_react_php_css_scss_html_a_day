import Phone from "./images/phone-call.png"
import Email from "./images/envelope.png"
export default function Contact(props){
    return(
        <article className="contact-card">
            <img src={props.img} alt="dog" />
            <h3>{props.name}</h3>
            <div className="contact-info">
                <img src={Phone} alt="phone icon"/>
                <p>{props.phone}</p>
            </div>
            <div className="contact-info">
                <img src={Email} alt="envelope icon"/>
                <p>{props.email}</p>
            </div>
        </article>
    );
}
