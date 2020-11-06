import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  render() {
    return (
      <div className="container-body">
        <div>StreamList</div>
      </div>
    );
  }
}
export default connect(null, { fetchStreams })(StreamList);

//we need classbased component here because: we nee to cal action creator inside componentDidMount lifecycle method to fetch our list of streams one time
