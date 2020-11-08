import React from "react";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";
import Modal from "../Modal";
import history from "../../history";
import emoji from "../../assets/emoji.png";

class StreamDelete extends React.Component {
  componentDidMount() {
    // console.log(this.props);
    this.props.fetchStream(this.props.match.params.id);
  }
  renderActions() {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button onClick={() => this.props.deleteStream(id)} className="color">
          Delete
        </button>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure to delete this stream?";
    }
    return `Are you sure to delete this stream with title: ${this.props.stream.title}`;
  }

  render() {
    return (
      <div>
        <img className="image" src={emoji} alt="" />
        <Modal
          title="Delete Stream"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push("/")}
        />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
