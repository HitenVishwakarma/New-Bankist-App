import React from "react";

interface IProps {
  openModal: boolean;
  closeModal: () => void;
}

export const Modal = (props: IProps) => {
  const { closeModal, openModal } = props;

  return (
    <>
      <div className={openModal ? "modal" : "hidden"}>
        <button className="btn--close-modal" onClick={closeModal}>
          &times;
        </button>
        <h2 className="modal__header">
          Open your bank account <br />
          in just <span className="highlight">5 minutes</span>
        </h2>
        <form className="modal__form">
          <label>First Name</label>
          <input type="text" />
          <label>Last Name</label>
          <input type="text" />
          <label>Email Address</label>
          <input type="email" />
          <button className="btn">Next step &rarr;</button>
        </form>
      </div>
      <div className={openModal ? "overlay" : "hidden"}></div>
    </>
  );
};
