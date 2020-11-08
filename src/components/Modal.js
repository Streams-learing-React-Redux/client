import React from "react";
import ReactDOM from "react-dom";

const Modal = props => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="modal">
      <div onClick={e => e.stopPropagation()} className="modal-body">
        {/* stopPropagation() is stoping to do anything when user clicks inside the modal body */}
        <h3>{props.title}</h3>

        <div className="modal-body-part">
          <p>{props.content}</p>
          <div className="modal-body-part-button">
            {props.actions}
            <button onClick={props.onDismiss} className="color blue">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};
export default Modal;
