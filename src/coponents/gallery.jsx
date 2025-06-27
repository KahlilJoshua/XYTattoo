import { useRef } from "react";

const Gallery = ()=>{
  const s1 = useRef(null)
  const s2 = useRef(null)
  const pauseAnimation =()=>{
    s1.current.style.animationPlayState = 'paused';
  }
  const playAnimation = ()=>{
    s1.current.style.animationPlayState = "";
  }
  const pauseAnimation2 =()=>{
    s2.current.style.animationPlayState = 'paused';
  }
  const playAnimation2 = ()=>{
    s2.current.style.animationPlayState = "";
  }
    return (
      <section className="gallery">
        <h3>Gallery</h3>
        <div className="galleryContainer">
          <div className="scroller">
            <div
              className="innerScroller1"
              ref={s1}
              onTouchStart={pauseAnimation}
              onTouchEnd={playAnimation}
              onTouchCancel={playAnimation}
              onMouseDown={pauseAnimation}
              onMouseLeave={playAnimation}
              onMouseUp={playAnimation}
            >
              <img src="src/img/tattoo4.webp" alt="" loading="lazy" />
              <img src="src/img/tattoo3.webp" alt="" loading="lazy" />
              <img src="src/img/tattoo1.png" alt="" loading="lazy" />
              <img src="src/img/tattoo4.webp" alt="" loading="lazy" />
              <img src="src/img/tattoo3.webp" alt="" loading="lazy" />
              <img src="src/img/tattoo1.png" alt="" loading="lazy" />
              <img src="src/img/tattoo4.webp" alt="" loading="lazy" />
              <img src="src/img/tattoo3.webp" alt="" loading="lazy" />
              <img src="src/img/tattoo1.png" alt="" loading="lazy" />
            </div>
          </div>
          <div className="scroller">
            <div
              className="innerScroller2"
              ref={s2}
              onTouchStart={pauseAnimation2}
              onTouchEnd={playAnimation2}
              onTouchCancel={playAnimation2}
              onMouseDown={pauseAnimation2}
              onMouseLeave={playAnimation2}
              onMouseUp={playAnimation2}
            >
              <img src="src/img/tattoo4.webp" alt="" loading="lazy" />
              <img src="src/img/tattoo3.webp" alt="" loading="lazy" />
              <img src="src/img/tattoo1.png" alt="" loading="lazy" />
              <img src="src/img/tattoo4.webp" alt="" loading="lazy" />
              <img src="src/img/tattoo3.webp" alt="" loading="lazy" />
              <img src="src/img/tattoo1.png" alt="" loading="lazy" />
              <img src="src/img/tattoo4.webp" alt="" loading="lazy" />
              <img src="src/img/tattoo3.webp" alt="" loading="lazy" />
              <img src="src/img/tattoo1.png" alt="" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    );
}
export default Gallery