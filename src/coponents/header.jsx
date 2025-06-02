import { useState } from "react";
import { useRef } from "react";
const Header = () => {
  const [isToggled, setIsToggled] = useState(false);
  const asideRef = useRef(null);
  const handleToggle = () => {
    setIsToggled(!isToggled)
    if(isToggled != true){
      asideRef.current.style.right = "0%"
    }
    else{
      asideRef.current.style.right = "100%";
    }
  };
    return (
      <>
        <header>
          <div className="logo">
            <img src="./src/img/logo.png" alt="XY-Logo" className="logoImage" />
            <h1 className="logoText">Tattoo Studio</h1>
          </div>
          <nav>
            <ul>
              <li>
                <a href="">Gallery</a>
              </li>
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <img onClick={handleToggle} className="burger" src="./src/img/burger.svg" alt="burger" />
            </ul>
          </nav>
        </header>

        <aside className="sideNav">
          <section className="asideWrapper" ref={asideRef}>
            <nav>
              <ul>
                <li>
                  <a href="">Gallery</a>
                </li>
                <li>
                  <a href="">About us</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
                <img
                  onClick={handleToggle}
                  className="burger"
                  src="./src/img/burger.svg"
                  alt="burger"
                />
              </ul>
            </nav>
          </section>
        </aside>
      </>
    );
};

export default Header;