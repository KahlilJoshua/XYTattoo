import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
const Hero = ()=>{
  const [ref, isVisible] = useIntersectionObserver();
    return (
      <section className="hero">
        <video autoPlay loop playsInline muted className="videoBackground">
          <source src="./img/XYVid1.mp4" type="video/mp4" />
        </video>
        <div className={`heroContent ${isVisible ? 'fadeIn' : ''}`} ref={ref}>
          <h2>Your vision, our ink</h2>
          <p>Located in Los Angeles</p>
        </div>
      </section>
    );
}
export default Hero