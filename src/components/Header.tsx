import React, { useState } from "react";
import logo from "../img/logo.png";
import hero from "../img/hero.png";
import { Modal } from "../modal/Modal";

type Props = {};

export const Header = (props: Props) => {
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <>
      <header className="header">
        <nav className="nav">
          <img src={logo} alt="Bankist logo" className="nav__logo" id="logo" />
          <ul className="nav__links">
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
            <span className="highlight">banking</span>
            meets
            <br />
            <span className="highlight">minimalist</span>
          </h1>
          <h4>A simpler banking experience for a simpler life.</h4>
          <button className="btn--text btn--scroll-to">
            Learn more &DownArrow;
          </button>
          <img src={hero} className="header__img" alt="Minimalist bank items" />
        </div>
      </header>
      {isModal && <Modal openModal={isModal} closeModal={closeModal} />}
    </>
  );
};
