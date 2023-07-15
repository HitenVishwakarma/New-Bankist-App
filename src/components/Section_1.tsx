import React from "react";
import digitalLazy from "../img/digital-lazy.jpg";
import digital from "../img/digital.jpg";
import cardLazy from "../img/card-lazy.jpg";
import card from "../img/card.jpg";
import growLazy from "../img/grow-lazy.jpg";
import grow from "../img/grow.jpg";
import icon from "../img/icons.svg";

interface IProps {
  learnMore: boolean;
}

export const Section_1 = (props: IProps) => {
  if (props.learnMore) {
    // const s1cords: any = document
    //   .querySelector("#section--1")
    //   ?.getBoundingClientRect();
    // window.scrollTo({
    //   left: s1cords?.left + window.pageXOffset,
    //   top: s1cords?.top + window.pageYOffset,
    //   behavior: "smooth",
    // });

    const section1: any = document.querySelector("#section--1");
    section1.scrollIntoView({ behavior: "smooth" });
  }

  const featureHandler = () => {
    const section1: any = document.querySelector(".section__description");
    section1.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="section" id="section--1">
      <div className="section__title">
        <h2 className="section__description" onClick={featureHandler}>
          Features
        </h2>
        <h3 className="section__header">
          Everything you need in a modern bank and more.
        </h3>
      </div>

      <div className="features">
        <img
          src={digitalLazy}
          data-src={digital}
          alt="Computer"
          className="features__img lazy-img"
        />
        <div className="features__feature">
          <div className="features__icon">
            <svg>
              <use href={icon}></use>
            </svg>
          </div>
          <h5 className="features__header">100% digital bank</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias
            sint quos? Accusantium a fugiat porro reiciendis saepe quibusdam
            debitis ducimus.
          </p>
        </div>

        <div className="features__feature">
          <div className="features__icon">
            <svg>
              <use href={icon}></use>
            </svg>
          </div>
          <h5 className="features__header">Watch your money grow</h5>
          <p>
            Nesciunt quos autem dolorum voluptates cum dolores dicta fuga
            inventore ab? Nulla incidunt eius numquam sequi iste pariatur
            quibusdam!
          </p>
        </div>
        <img
          src={growLazy}
          data-src={grow}
          alt="Plant"
          className="features__img lazy-img"
        />

        <img
          src={cardLazy}
          data-src={card}
          alt="Credit card"
          className="features__img lazy-img"
        />
        <div className="features__feature">
          <div className="features__icon">
            <svg>
              <use href={icon}></use>
            </svg>
          </div>
          <h5 className="features__header">Free debit card included</h5>
          <p>
            Quasi, fugit in cumque cupiditate reprehenderit debitis animi enim
            eveniet consequatur odit quam quos possimus assumenda dicta fuga
            inventore ab.
          </p>
        </div>
      </div>
    </section>
  );
};
