import React, { useEffect, useState } from "react";
import logo from "../img/logo.png";
import hero from "../img/hero.png";
import { Modal } from "../modal/Modal";
import { Section_1 } from "./Section_1";

type Props = {};

export const Header = (props: Props) => {
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  const onLearnMore = () => {
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
  };

  const navLinkHandler = (e: any) => {
    if (e.target.classList.contains("nav__link")) {
      e.preventDefault();
      const id = e.target.getAttribute("href");
      document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="header">
        <nav className="nav">
          <img src={logo} alt="Bankist logo" className="nav__logo" id="logo" />
          <ul className="nav__links" onClick={(e) => navLinkHandler(e)}>
            <li className="nav__item">
              <a className="nav__link" href="#section--1">
                Features
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#section--2">
                Operations
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#section--3">
                Testimonials
              </a>
            </li>
            <li className="nav__item">
              <a
                className="nav__link nav__link--btn btn--show-modal"
                href="#"
                onClick={openModal}
              >
                Open account
              </a>
            </li>
          </ul>
        </nav>

        <div className="header__title">
          <h1>
            When
            {/* <!-- Green highlight effect --> */}
            <span className="highlight"> banking </span>
            meets
            <br />
            <span className="highlight"> minimalist</span>
          </h1>
          <h4>A simpler banking experience for a simpler life.</h4>
          <button className="btn--text btn--scroll-to" onClick={onLearnMore}>
            Learn more &darr;
          </button>
          <img src={hero} className="header__img" alt="Minimalist bank items" />
        </div>
      </header>
      <Section_1 />
      {isModal && <Modal openModal={isModal} closeModal={closeModal} />}
    </>
  );
};
