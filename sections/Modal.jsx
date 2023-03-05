import React from 'react';

const Modal = () => (
  <>
    <input type="checkbox" id="contact-modal" className="modal-toggle" />
    <div className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Whoopsie!</h3>
        <p className="py-4">
          The email system isn't quite ready yet, but I'm working on it! In the
          meantime, feel free to reach out to me via social media or check back
          soon for updates on my progress.
        </p>
        <div className="modal-action">
          <label htmlFor="contact-modal" className="btn">
            Gotcha!
          </label>
        </div>
      </div>
    </div>
  </>
);

export default Modal;
