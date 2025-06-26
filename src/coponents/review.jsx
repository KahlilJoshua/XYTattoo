import { useState, useRef, useEffect } from "react";
const Review = () => {
  const reviewRef = useRef(null);

  const [page, pageSelector] = useState(0);

  const percent = ["0%", "-25%", "-50%", "-75%"];

  useEffect(() => {
    if (reviewRef.current) {
      reviewRef.current.style.transform = `translateX(${percent[page]})`;
    }
  }, [page]);

  const back = () => {
    if (page > 0) {
      pageSelector(page - 1);
      console.log(page);
      setReview();
    }
  };

  const forward = () => {
    if (page < 3) {
      pageSelector(page + 1);
      console.log(page);
      setReview();
    }
  };

  const setReview = () => {
    switch (page) {
      case 0:
        reviewRef.current.style.transform = `translateX(${percent[page]})`;
        break;
      case 1:
        reviewRef.current.style.transform = `translateX(${percent[page]})`;
        break;
      case 2:
        reviewRef.current.style.transform = `translateX(${percent[page]})`;
        break;
      case 3:
        reviewRef.current.style.transform = `translateX(${percent[page]})`;
        break;
    }
  };

  return (
    <section className="reviewSection">
      <div className="reviewContainer">
        <div onClick={back} className="leftClick"><img  src="src/img/rightArrow.webp" alt="" /></div>
        <div onClick={forward} className="rightClick"><img  src="src/img/rightArrow.webp" alt="" /></div>
        <div className="allReviews" ref={reviewRef}>
          <div className="review">
            <h4>Google Review</h4>
            <p>First tattoo ever and got it done yesterday! I’m very HAPPY with the design and outcome of my tattoo</p>
            <div className="stars">
              <img src="src/img/star.png" alt="star" />
              <img src="src/img/star.png" alt="star" />
              <img src="src/img/star.png" alt="star" />
              <img src="src/img/star.png" alt="star" />
              <img src="src/img/star.png" alt="star" />
            </div>
          </div>
          <div className="review">
            <h4>Google Review</h4>
            <p>Highly recommended artist! Very satisfied with the outcome of my tatts, salute to you Xy! Till next time</p>
            <div className="stars">
              <img src="src/img/star.png" alt="star" />
              <img src="src/img/star.png" alt="star" />
              <img src="src/img/star.png" alt="star" />
              <img src="src/img/star.png" alt="star" />
              <img src="src/img/star.png" alt="star" />
            </div>
          </div>
          <div className="review">
            <h4>Yelp Review</h4>
            <p>By far my favorite tattoo and Xyborg once again astounded me with his precision, line work and patience</p>
            <div className="stars">
              <img src="src/img/star.png" alt="star" />
              <img src="src/img/star.png" alt="star" />
              <img src="src/img/star.png" alt="star" />
              <img src="src/img/star.png" alt="star" />
              <img src="src/img/star.png" alt="star" />
            </div>
          </div>
          <div className="review">
            <h4>Google Review</h4>
            <p>Just got a vines tattoo from this place and I'm obsessed. It flows so naturally and the detail is insane like, every tiny leaf is perfect.</p>
            <div className="stars">
              <img src="src/img/star.png" alt="star" />
              <img src="src/img/star.png" alt="star" />
              <img src="src/img/star.png" alt="star" />
              <img src="src/img/star.png" alt="star" />
              <img src="src/img/star.png" alt="star" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Review;
