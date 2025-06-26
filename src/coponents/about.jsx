import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
const About = () => {
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <section className="about">
      <h3>About us</h3>
      <div className="aboutWrapper">
        <article className={`${isVisible ? 'fadeInLeft' : ''}`} ref={ref}>
          <h4>Our story</h4>
          <p>Tacos are pure joy in a tortilla. A perfect handheld meal, they combine savory meats, fresh veggies, vibrant salsas, and creamy toppings. Each bite offers a delightful crunch and burst of flavor, celebrating simple, satisfying perfection.</p>
          <br />
          <h4>Tattoo good</h4>
          <p>The burrito is a masterful feat of culinary engineering: a complete meal, expertly wrapped within a warm, expansive flour tortilla. It's a harmonious cylinder packed with a symphony of ingredients—fluffy rice, tender beans, richly seasoned meat (or a vibrant veggie alternative), sharp cheese, cooling sour cream or crema, and a zesty salsa. Each bite delivers a dense, satisfying combination of flavors and textures, making it the ultimate portable and filling indulgence.</p>
        </article>
        <div className="aboutImageContainer">
              <img className="aboutImage" src="./src/img/aboutimg.jpg" alt="" loading="lazy" />
        </div>
      </div>
    </section>
  );
};
export default About;
