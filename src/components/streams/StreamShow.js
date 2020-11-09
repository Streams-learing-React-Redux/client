import React from "react";
import flv from "flv.js";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamShow extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef(props);
  }
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    if (!this.props.stream) {
      return <div>loading</div>;
    }
    const { title, description } = this.props.stream;
    return (
      <div>
        <video ref={this.videoRef} style={{ width: "100%" }} controls={true} />
        <h1 className="capitalize">{title}</h1>
        <h5 className="capitalize">{description}</h5>
      </div>
    );
  }
}
const mapstatetoprops = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapstatetoprops, { fetchStream })(StreamShow);

//go to the url -> call action creator to fetch that stream --> use mapstatetoprops func to get that stream out of our redux store and into our componenet
