import { useRef } from "react";

const Contact = ()=>{
    const inputRef = useRef(null)
    return (
      <section className="contact">
        <div className="imageContainer">
          <img src="src/img/tattoo1.png" alt="" />
        </div>
        <article className="contactText">
          <h3>Interrested in getting a tattoo?</h3>
          <div className="number">
            <p>Phone number:</p>
            <a href="tel:+12132668225">(213) 266-8225</a>
          </div>
          <div className="mail">
            <p>Mail:</p>
            <a href="mailto:">XYtattoo@gmail.com</a>
          </div>
          <div>
            <h4>1. First bring up your idea</h4>
            <p>mas dmoawdm apwmd oamwm dawomd amwoda . A aw dawd asdawdw</p>
          </div>
          <div>
            <h4>2. We'll get back with a price estimate and design</h4>
            <p>sm damwpd a,wpa mwp.</p>
          </div>
          <div>
            <h4>3. Book time for the tattoo</h4>
            <p>mda mwp aowdm oawd a dawknd akmwd d awmod aw. (dnwd 1-3)</p>
          </div>
          <div className="contactField">
            <h4>Tell us about ur tattoo</h4>
            <input className="inputMessage" type="text" ref={inputRef}/>
            <button className="submitButton">
                Submit
            </button>
           </div>
        </article>
      </section>
    );
}
export default Contact