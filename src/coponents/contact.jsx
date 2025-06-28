import { useRef } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useSanityDocument } from "../hooks/useSanityDocument";
const Contact = ()=>{
    const [ref, isVisible] = useIntersectionObserver();
    const inputRef = useRef(null)
    const { data, loading, error } = useSanityDocument(
      `*[_type == "siteSettings"][0]{contact1, contact2, contact3}`
    );
    return (
      <section className="contact">
        <div className="imageContainer">
          <img src="./img/tattoo1.png" alt="" />
        </div>
        <article className={`contactText ${isVisible ? "fadeInRight" : ""}`} ref={ref}>
          <h3>Interrested in getting a tattoo?</h3>
          <div>
            <h4>1. First bring up your idea</h4>
            <p>{error ? "Error loading text." : data?.contact1 || "Loading..."}</p>
          </div>
          <div>
            <h4>2. We'll get back with a price estimate and design</h4>
            <p>{error ? "Error loading text." : data?.contact2 || "Loading..."}</p>
          </div>
          <div>
            <h4>3. Book time for the tattoo</h4>
            <p>{error ? "Error loading text." : data?.contact3 || "Loading..."}</p>
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