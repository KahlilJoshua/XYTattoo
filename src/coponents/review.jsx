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
    if (page >= 0) {
      pageSelector(page - 1);
      console.log(page);
      setReview();
    }
  };

  const forward = () => {
    if (page <= 3) {
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
        <div onClick={back} className="leftClick"></div>
        <div onClick={forward} className="rightClick"></div>
        <div className="allReviews" ref={reviewRef}>
          <div className="review">
            <h4>Google Review</h4>
            <p>bla bal bla bla</p>
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
            <p>bla bal bla bla</p>
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
            <p>bla bal bla bla</p>
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
            <p>bla bal bla bla</p>
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
