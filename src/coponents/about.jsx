import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useSanityDocument } from "../hooks/useSanityDocument";
import { urlFor } from "../sanity";
const About = () => {
  const [ref, isVisible] = useIntersectionObserver();

  //gets data from sanity on mount
  const {
    data: imagesData,
    loading: imagesLoading,
    error: imagesError,
  } = useSanityDocument(
    `*[_type == "siteImages"][0]{image1}`
  );

  const { data, loading, error } = useSanityDocument(
    `*[_type == "siteSettings"][0]{aboutText1, aboutText2}`
  );

  const aboutImageUrl = imagesError
    ? "https://placehold.co/400x300?text=Image+Error"
    : imagesLoading
    ? "https://placehold.co/400x300?text=Loading+Image..."
    : imagesData?.image1
    ? urlFor(imagesData.image1).width(400).url()
    : "https://placehold.co/400x300?text=Image+Missing";


  return (
    <section className="about">
      <h3>About us</h3>
      <div className="aboutWrapper">
        <article className={`${isVisible ? "fadeInLeft" : ""}`} ref={ref}>
          <h4>Our story</h4>
          <p>
            {error ? "Error loading text." : data?.aboutText1 || "Loading..."}
          </p>
          <br />
          <h4>Tattoo good</h4>
          <p>
            {error ? "Error loading text." : data?.aboutText2 || "Loading..."}
          </p>
        </article>
        <div className="aboutImageContainer">
          <img
            className="aboutImage"
            src={aboutImageUrl}
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
export default About;
