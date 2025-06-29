import { useRef } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useSanityDocument } from "../hooks/useSanityDocument";
const Contact = ()=>{
    const [ref, isVisible] = useIntersectionObserver();
    const inputRef = useRef(null)
    const { data, loading, error } = useSanityDocument(
      `*[_type == "siteSettings"][0]{contact1, contact2, contact3, contactTitle, contactTitle2, contactTitle3}`
    );
    return (
      <section className="contact">
        <div className="imageContainer">
          <img src="./img/tattoo1.png" alt="" />
        </div>
        <article className={`contactText ${isVisible ? "fadeInRight" : ""}`} ref={ref}>
          <h3>Interrested in getting a tattoo?</h3>
          <div>
            <h4>{error ? "Error loading text." : data?.contactTitle || "Loading..."}</h4>
            <p>{error ? "Error loading text." : data?.contact1 || "Loading..."}</p>
          </div>
          <div>
            <h4>{error ? "Error loading text." : data?.contactTitle2 || "Loading..."}</h4>
            <p>{error ? "Error loading text." : data?.contact2 || "Loading..."}</p>
          </div>
          <div>
            <h4>{error ? "Error loading text." : data?.contactTitle3 || "Loading..."}</h4>
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