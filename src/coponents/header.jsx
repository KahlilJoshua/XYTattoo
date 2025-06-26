import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
const Header = () => {
  const [isToggled, setIsToggled] = useState(false);
  const asideRef = useRef(null);
  const asideWrapperRef = useRef(null);
  const zIndexTimerRef = useRef(null);

  const handleToggle = () => {
    //clear timer
    if (zIndexTimerRef.current) {
      clearTimeout(zIndexTimerRef.current);
      zIndexTimerRef.current = null;
    }

    setIsToggled((prevIsToggled) => !prevIsToggled);


    if (!isToggled) {
      if (asideWrapperRef.current) {
        asideWrapperRef.current.style.zIndex = "5";
      }
      if (asideRef.current) {
        asideRef.current.style.transform = "translateX(0px)";
      }
      document.querySelector("body").style.overflow = "hidden";
    }

    else {

      if (asideRef.current) {
        asideRef.current.style.transform = "translateX(100%)";
      }
      document.querySelector("body").style.overflow = "auto";

      zIndexTimerRef.current = setTimeout(() => {
        if (asideWrapperRef.current) {
          asideWrapperRef.current.style.zIndex = "-1"; 
        }
        zIndexTimerRef.current = null;
      }, 1000);
    }
  };

  useEffect(() => {
    return () => {
      if (zIndexTimerRef.current) {
        clearTimeout(zIndexTimerRef.current);
      }
    };
  }, []);
  //Scroll kod
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header className={isScrolled ? "headerScrolled" : ""}>
        <div className="logo">
          <img
            src="./src/img/logo.png"
            alt="XY-Logo"
            className="logoImage"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
          <h1 className="logoText">Tattoo Studio</h1>
        </div>
        <nav>
          <ul className="headerUl">
            <li>
              <a>Gallery</a>
            </li>
            <li>
              <a onClick={()=>{}}>
                About us
              </a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <img
              onClick={handleToggle}
              className="burger"
              src="./src/img/burger.svg"
              alt="burger"
            />
          </ul>
        </nav>
      </header>

      <aside className="sideNav" ref={asideWrapperRef}>
        <section className="asideWrapper" ref={asideRef} onClick={handleToggle}>
          <nav>
            <ul className="asideListWrapper">
              <li>
                <a href="">Gallery</a>
              </li>
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </nav>
        </section>
      </aside>
    </>
  );
};

export default Header;
