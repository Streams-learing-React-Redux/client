import React from "react";
import { connect } from "react-redux";
//to get information from redux store get the connect function,
// define mapstatetoproprs function and wire it up to stream at it. thats how we will get the list of streams into the component
import { fetchStream } from "../../actions";

//we will need a classbased component here to fetchStream on componentdidmount
class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  render() {
    // console.log(this.props);
    if (!this.props.stream) {
      return <div>Wait a moment! 😊 </div>;
    }
    return <div>{this.props.stream.title}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps);
  return { stream: state.streams[ownProps.match.params.id] };
};
//ownprops is the props that shows up in the component here. its another argument or mapstatetoprorps.

export default connect(mapStateToProps, { fetchStream })(StreamEdit);

//big lesson: anytime working with any id based selection, we always have to make sure that any component that is going to be shown on the screen is going to be designed to work by itself or in isolation. it needs to fetch its own data ( )remember how at the begining whenthis edit page renders how the state of the props was undefined? and it shows the stremsa after we click on a edit buton of the list? ..yeah, we are trying to solve that problem, what happpens here that st the begining state props that comes from the store is empty, so thats why it needs to be independent while working alone, like editing or someting.. yay!
