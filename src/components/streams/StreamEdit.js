import React from "react";
import { connect } from "react-redux";
//to get information from redux store get the connect function,
// define mapstatetoproprs function and wire it up to stream at it. thats how we will get the list of streams into the component, also we need editstream
import { fetchStream, editStream } from "../../actions";
//***** REFACTORING******* we need streamForm
import StreamForm from "./StreamForm";
import _ from "lodash";

//we will need a classbased component here to fetchStream on componentdidmount
class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  //***** REFACTORING******* we need onSubmit() , this will be used  as a callback for streamform
  onSubmit = formValues => {
    console.log(formValues);
  };

  render() {
    // console.log(this.props);
    if (!this.props.stream) {
      return <div>Wait a moment! 😊 </div>;
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        {/* here we have to pass in initial values to reduxform from streamedit to show up the values inside the form to edit */}
        <StreamForm
          initialValues={_.pick(this.props.stream, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps);
  return { stream: state.streams[ownProps.match.params.id] };
};
//ownprops is the props that shows up in the component here. its another argument or mapstatetoprorps.

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);

//big lesson: anytime working with any id based selection, we always have to make sure that any component that is going to be shown on the screen is going to be designed to work by itself or in isolation. it needs to fetch its own data ( )remember how at the begining whenthis edit page renders how the state of the props was undefined? and it shows the stremsa after we click on a edit buton of the list? ..yeah, we are trying to solve that problem, what happpens here that st the begining state props that comes from the store is empty, so thats why it needs to be independent while working alone, like editing or someting.. yay!

//*** REFACTORING TO SHOW VALUES */
// quick flow of how it is don:
// passing an initialValue props down to StreamForm --> StreamForm is technically rendered or wrapped by the redux form helper so that redux form helper sees that prop of initial values, it sees that it is an object with a tile and description property --> so whn the streamform is rendered we have a field with tile and field with description, so those inital values are used as the initail values for the filed of tile an ddescription --> aftr editing somothing, on submit it will call the callback onsubmit() handler of streamedit and it is showing on console

//_.pick from lodash . what is it doing????
//ans: we are picking out the form values that need to be edited and
