import React, { useState } from "react";
import "./portfolio.css";
/* <img src="/images/work1.png"></img>  */
const Portfolio = () => {
  const [showMore, setShowMore] = useState(false);

  const handleLoadMore = () => {
    setShowMore(true);
  };

  const handleLoadLess = () => {
    setShowMore(false);
  };

  return (
    <div id="portfolio">
      <div className="container">
        <h1 class="sub-title">My Work</h1>

        {/* <div class="services-list2">
          <div className="work1"></div>
          <div className="work2"></div>
          <div className="work3"></div>
          <div className="work4"></div>
          <div className="work6"></div>
          <div className="work5"></div>
        </div>
        <div className="portbtn1">
          <butoon className="portbtn" id="loadmore">
            Load More <i class="fa-solid fa-angle-down"></i>
          </butoon>
        </div> */}



        <div>
        <div className="services-list2">
          <div className="work1"></div>
          <div className="work7"></div>
          <div className="work3"></div>
          <div className="work4"></div>
         <div className="work6"></div>
           <div className="work5"></div>
          {showMore ? (
            <>
              <div className="work4"></div>
              <div className="work6"></div>
              <div className="work5"></div>
              <div className="work2"></div>
            </>
          ) : (
            <>
              <div className="work4" style={{ display: "none" }}></div>
              <div className="work6" style={{ display: "none" }}></div>
              <div className="work5" style={{ display: "none" }}></div>
              <div className="work7" style={{ display: "none" }}></div>
            </>
          )}
        </div>
        {!showMore ? (
          <div className="portbtn1">
          <button className="portbtn" id="loadmore" onClick={handleLoadMore}>
            Load More <i className="fa-solid fa-angle-down"></i>
          </button>
          </div>
        ) : (
          <div className="portbtn1">
          <button className="portbtn" id="loadless" onClick={handleLoadLess}>
            Load Less <i className="fa-solid fa-angle-up"></i>
          </button>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default Portfolio;
