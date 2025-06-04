const Contact = ()=>{
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
        </article>
      </section>
    );
}
export default Contact