import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";
import Modal from "../Modal";
import history from "../../history";

class StreamDelete extends React.Component {
  componentDidMount() {
    // console.log(this.props);
    this.props.fetchStream(this.props.match.params.id);
  }
  renderActions() {
    return (
      <React.Fragment>
        <button className="color">Delete</button>
        <button className="color blue">Cancel</button>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div>
        StreamDelete
        <Modal
          title="Delete Stream"
          content="Are you sure to delete this stream?"
          actions={this.renderActions()}
          onDismiss={() => history.push("/")}
        />
      </div>
    );
  }
}
export default connect(null, { fetchStream })(StreamDelete);
