import React from "react";
import ReactDOM from "react-dom";
import history from "../history";

const Modal = props => {
  return ReactDOM.createPortal(
    <div onClick={() => history.push("/")} className="modal">
      {/* history.push("/") is taking user to list or home */}
      <div onClick={e => e.stopPropagation()} className="modal-body">
        {/* stopPropagation() is stoping to do anything when user clicks inside the modal body */}
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
