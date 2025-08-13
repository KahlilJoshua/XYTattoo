const Footer = () => {
  return (
    <footer>
      <div className="upper">
        <div className="number">
          <p>Phone number:</p>
          <a className="w" href="tel:+12132668225">
            (213) 266-8225
          </a>
        </div>
        <div className="mail">
          <p>Mail:</p>
          <a
            className="w"
            href="mailto:xytattoostudio@gmail.com?subject=Tattoo%20Inquiry%20from%20Website&body=Hello%20XY%20Tattoo%20Studio%2C%20i%20want%20this%20tattoo...%20on%20this%20location...%20and%20this%20size..."
          >
            xytattoostudio@gmail.com
          </a>
        </div>
        <div className="socails">
          <p>Follow us:</p>
          <a
            href="https://www.instagram.com/xytattoostudio/"
            aria-label="Follow us on Instagram"
          >
            <img src="./img/insta.webp" alt="Instagram Logo" />
          </a>
        </div>
      </div>
      <div className="lower">
        '<p>XYTatto all rights reseverd © 2025 Made by Kahlil Joshua</p>
      </div>
    </footer>
  );
};
export default Footer;
