import { useRef } from "react";
import { urlFor } from "../sanity";
import { useSanityDocument } from "../hooks/useSanityDocument";

const Gallery = () => {
  const s1 = useRef(null);
  const s2 = useRef(null);
  const pauseAnimation = () => {
    s1.current.style.animationPlayState = "paused";
  };
  const playAnimation = () => {
    s1.current.style.animationPlayState = "";
  };
  const pauseAnimation2 = () => {
    s2.current.style.animationPlayState = "paused";
  };
  const playAnimation2 = () => {
    s2.current.style.animationPlayState = "";
  };
  //santiy
  const {
    data: imagesData,
    loading: imagesLoading,
    error: imagesError,
  } = useSanityDocument(`*[_type == "siteImages"][0]{image1,image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12}`);

   const allImageUrls = Array.from({ length: 12 }).map((_, index) => {
     const imageName = `image${index + 1}`; // Construct image field name (e.g., 'image1', 'image2')
     const imageObject = imagesData?.[imageName]; // Safely get the image object

     if (imagesError) {
       return `https://placehold.co/400x300?text=Image+Error+${index + 1}`;
     }
     if (imagesLoading) {
       return `https://placehold.co/400x300?text=Loading+Image+${index + 1}...`;
     }
     if (imageObject) {
       return urlFor(imageObject).width(1000).url(); // Sanity image URL
     }
     return `https://placehold.co/400x300?text=Image+Missing+${index + 1}`; // Placeholder for missing in CMS
   });

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
            <img src={allImageUrls[1]} alt="tatto" />
            <img src={allImageUrls[2]} alt="tatto" />
            <img src={allImageUrls[3]} alt="tatto" />
            <img src={allImageUrls[4]} alt="tatto" />
            <img src={allImageUrls[1]} alt="tatto" />
            <img src={allImageUrls[2]} alt="tatto" />
            <img src={allImageUrls[3]} alt="tatto" />
            <img src={allImageUrls[4]} alt="tatto" />
            <img src={allImageUrls[1]} alt="tatto" />
            <img src={allImageUrls[2]} alt="tatto" />
            <img src={allImageUrls[3]} alt="tatto" />
            <img src={allImageUrls[4]} alt="tatto" />
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
            <img src={allImageUrls[5]} alt="tatto" />
            <img src={allImageUrls[6]} alt="tatto" />
            <img src={allImageUrls[9]} alt="tatto" />
            <img src={allImageUrls[8]} alt="tatto" />
            <img src={allImageUrls[5]} alt="tatto" />
            <img src={allImageUrls[6]} alt="tatto" />
            <img src={allImageUrls[7]} alt="tatto" />
            <img src={allImageUrls[8]} alt="tatto" />
            <img src={allImageUrls[5]} alt="tatto" />
            <img src={allImageUrls[6]} alt="tatto" />
            <img src={allImageUrls[7]} alt="tatto" />
            <img src={allImageUrls[8]} alt="tatto" />

          </div>
        </div>
      </div>
    </section>
  );
};
export default Gallery;
