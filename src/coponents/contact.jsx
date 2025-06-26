import { useRef } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
const Contact = ()=>{
    const [ref, isVisible] = useIntersectionObserver();
    const inputRef = useRef(null)
    return (
      <section className="contact">
        <div className="imageContainer">
          <img src="src/img/tattoo1.png" alt="" />
        </div>
        <article className={`contactText ${isVisible ? "fadeInRight" : ""}`} ref={ref}>
          <h3>Interrested in getting a tattoo?</h3>
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
          <div className="number">
            <p>Call us:</p>
            <a href="tel:+12132668225">(213) 266-8225</a>
          </div>
          <div className="contactField">
            <button className="submitButton">Email us</button>
          </div>
        </article>
      </section>
    );
}
export default Contact