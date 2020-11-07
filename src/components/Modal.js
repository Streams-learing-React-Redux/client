import React from "react";
import ReactDOM from "react-dom";
const Modal = props => {
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-body">
        <h3>Delete Stream</h3>
        <div className="modal-body-part">
          <p>Are you sure to delete this stream?</p>
          <div className="modal-body-part-button">
            <button className="color ">Delete</button>
            <button className="color blue">Cancel</button>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};
export default Modal;
