import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import cam from "../../assets/cam.png";
import { Link } from "react-router-dom"; //to link create stream page

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  //HELPER MOTHOD FOR ADMIN
  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right_floated_content">
          <button className="primary space">EDIT</button>
          <button className="negative space">DELETE</button>
        </div>
      );
    }
  }

  //method for redndering list
  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="one_item" key={stream.id}>
          <div className="one_item_parts">
            <div className="one_item_content">
              <img src={cam} alt="camera" />
            </div>

            <div className="one_item_content">
              <h3 className="one_item_title">{stream.title}</h3>
              <div className="one_item_description">{stream.description}</div>
            </div>
          </div>
          <div className="one_item_parts">{this.renderAdmin(stream)}</div>
        </div>
      );
    });
  }

  //helper method for create stream for signed in user. we will link create page here
  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new" className="primary">
            Create Stream
          </Link>
        </div>
      );
    }
  }

  render() {
    console.log(this.props.streams);
    return (
      <div className="container-body">
        <h2>All Tutorials</h2>

        <div className="full_list">{this.renderList()}</div>
        <div className="full_list">{this.renderCreate()}</div>
      </div>
    );
  }
}

// makeing streams availabe as props, here we will turn the object into an array again to make it easy to map over and run the function
const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn // to get if the user signedin or not for showing create button
  }; //Object.value is a js builtin function, ti will take an aobject as an argument, pull out all the different values of the object and then inserted into an array.
};
export default connect(mapStateToProps, { fetchStreams })(StreamList);

//we need classbased component here because: we nee to cal action creator inside componentDidMount lifecycle method to fetch our list of streams one time
