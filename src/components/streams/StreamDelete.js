import React from "react";
import Modal from "../Modal";
import history from "../../history";

const StreamDelete = () => {
  const actions = (
    <div>
      <button className="color">Delete</button>
      <button className="color blue">Cancel</button>
    </div>
  );
  return (
    <div>
      StreamDelete
      <Modal
        title="Delete Stream"
        content="Are you sure to delete this stream?"
        actions={actions}
        onDismiss={() => history.push("/")}
      />
    </div>
  );
};
export default StreamDelete;
