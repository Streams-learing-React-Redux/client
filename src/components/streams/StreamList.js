import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import cam from "../../assets/cam.png";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  //method for redndering list
  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="one_item" key={stream.id}>
          <div className="one_item_content">
            <img src={cam} alt="image of camera" />
          </div>

          <div className="one_item_content">
            <h3 className="one_item_title">{stream.title}</h3>
            <div className="one_item_description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    console.log(this.props.streams);
    return (
      <div className="container-body">
        <h2>Streams</h2>
        <div className="full_list">{this.renderList()}</div>
      </div>
    );
  }
}

// makeing streams availabe as props, here we will turn the object into an array again to make it easy to map over and run the function
const mapStateToProps = state => {
  return { streams: Object.values(state.streams) }; //Object.value is a js builtin function, ti will take an aobject as an argument, pull out all the different values of the object and then inserted into an array.
};
export default connect(mapStateToProps, { fetchStreams })(StreamList);

//we need classbased component here because: we nee to cal action creator inside componentDidMount lifecycle method to fetch our list of streams one time
