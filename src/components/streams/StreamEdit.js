import React from "react";
import { connect } from "react-redux";
//to get information from redux store get the connect function,
// define mapstatetoproprs function and wire it up to stream at it. thats how we will get the list of streams into the component

const StreamEdit = props => {
  console.log(props);
  return <div>StreamEdit</div>;
};

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps);
  return { stream: state.streams[ownProps.match.params.id] };
};
//ownprops is the props that shows up in the component here. its another argument or mapstatetoprorps.

export default connect(mapStateToProps)(StreamEdit);
