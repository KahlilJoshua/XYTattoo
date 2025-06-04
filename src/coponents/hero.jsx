const Hero = ()=>{
    return (
      <section className="hero">
        <video autoPlay loop playsInline muted className="videoBackground">
          <source src="src/img/XYVid1.mp4" type="video/mp4" />
        </video>
        <div className="heroContent">
          <h2>Your vision, our ink</h2>
          <p>Located in Los Angeles</p>
        </div>
      </section>
    );
}
export default Hero