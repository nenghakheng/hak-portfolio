import React, { useState } from "react";
import "./portfolio.css";

const Portfolio = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">
        Checkout My Education and Job Experience
      </span>

      <div className="portfolio__container container">
        <div className="portfolio__tabs">
          <div
            className={
              toggleState === 1
                ? "portfolio__button portfolio__active button--flex"
                : "portfolio__button  button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap portfolio__icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "portfolio__button portfolio__active button--flex"
                : "portfolio__button  button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt portfolio__icon"></i>
            Experience
          </div>
        </div>
        <div className="portfolio__sections">
          <div
            className={
              toggleState === 1
                ? "portfolio__content portfolio__content-active"
                : "portfolio__content"
            }
          >
            {/* First Major */}
            <div className="portfolio__data">
              <div>
                <h3 className="portfolio__title">Computer Science</h3>
                <span className="portfolio__subtitle">
                  Cambodia Academy of Digital Technology - CADT
                </span>
                <div className="portfolio__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2022 - Present (Senior Year)
                </div>
              </div>
              <div>
                <spam className="portfolio__rounder"></spam>
                <spam className="portfolio__line"></spam>
              </div>
            </div>
            {/* Second Major */}
            <div className="portfolio__data">
              <div></div>
              <div>
                <spam className="portfolio__rounder"></spam>
                <spam className="portfolio__line"></spam>
              </div>
              <div>
                <h3 className="portfolio__title">English Literature</h3>
                <span className="portfolio__subtitle">
                  Institute of Foreign Language - IFL
                </span>
                <div className="portfolio__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2023 - Present (Junior Year)
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "portfolio__content portfolio__content-active"
                : "portfolio__content"
            }
          >
            {/* First Internship */}
            <div className="portfolio__data">
              <div>
                <h3 className="portfolio__title">Mobile Developer</h3>
                <span className="portfolio__subtitle">BookMeBus</span>
                <div className="portfolio__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2023 - 2024 (9 Months)
                </div>
              </div>
              <div>
                <spam className="portfolio__rounder"></spam>
                <spam className="portfolio__line"></spam>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
