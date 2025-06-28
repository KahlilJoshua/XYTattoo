import { client } from "../sanity";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useEffect, useState } from "react";
import { useSanityDocument } from "../hooks/useSanityDocument";

const Hero = () => {
  const [ref, isVisible] = useIntersectionObserver();
  //gets data from sanity on mount
  const { data, loading, error } = useSanityDocument(
    `*[_type == "siteSettings"][0]{helloText}`
  );
  console.log(data)
  return (
    <section className="hero">
      <video autoPlay loop playsInline muted className="videoBackground">
        <source src="./img/XYVid1.mp4" type="video/mp4" />
      </video>
      <div className={`heroContent ${isVisible ? "fadeIn" : ""}`} ref={ref}>
        <h2>
          {error ? "Error loading text." : data?.helloText || "Loading..."}
        </h2>
        <p>Located in Los Angeles</p>
      </div>
    </section>
  );
};
export default Hero;
