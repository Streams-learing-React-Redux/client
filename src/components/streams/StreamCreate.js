//************* BIG REFACTORING************/
//stream create now needs to show an instance of stream form passed down onsubmit and do NOTHING ELSE.
// for that: remove component, field from import, delete renderError(), renderinput(), the entire form on rednder, replace it with header and form, dont need the validate function anymore, no wrapping with reduxform
//

import React from "react";
//importing Field (component) and reduxForm (function)
// import { Field, reduxForm } from "redux-form";
//import  connect and action creator to hook up our action creators here

//************* BIG REFACTORING************/
// we need this two because this componenet need to call an action creator to create a new stream
import { connect } from "react-redux";
import { createStream } from "../../actions";
//we need the stream form componenet that we created
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  //************* BIG REFACTORING************/
  // renderError({ error, touched }) {
  //   if (touched && error) {
  //     return (
  //       <div className="errormsg">
  //         <div className="header">{error}</div>
  //       </div>
  //     );
  //   }
  // }
  //helper method for Field. it will be a controlled element
  // renderInput = ({ input, label, meta }) => {
  //   // console.log(formProps);
  //   // console.log(meta);
  //   return (
  //     <div className="field">
  //       <label>{label}</label>
  //       <input {...input} autoComplete="off" />
  //       {this.renderError(meta)}
  //       {/* <div className="errormsg">{meta.error}</div> */}
  //     </div>
  //   );
  // };
  //handleing submission
  onSubmit = formValues => {
    // console.log(formValues);
    this.props.createStream(formValues); //on submit creating stream with the formvalue
  };
  render() {
    // console.log(this.props);
    //************* BIG REFACTORING************/
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

//************* BIG REFACTORING************/
//validate form input
// const validate = formValues => {
//   const errors = {};

//   if (!formValues.title) {
//     // only ran if user didnot give any title
//     errors.title = " ⚠️ You must enter a Title!";
//   }
//   if (!formValues.description) {
//     // only ran if user didnot give any title
//     errors.description = " ⚠️ You must enter a Description!";
//   }
//   return errors;
// };

//************* BIG REFACTORING************/
// const formWrapped = reduxForm({
//   form: "streamCreate",
//   validate
// })(StreamCreate);

//exporting both Streamform(mainly Reduxform) and connect
export default connect(null, { createStream })(StreamCreate);

//******* THIS PART WAS FROM BEFORE REFACTORING AND REUSING FORM */
//we will refactor this functional componenet to a class based component because, we need few helper method and we want a better organising sitauation here.
// we will import redux form at the top. reduxFrom function has the same functionality as connect funtion from the react-redux library. reactForm funtion will make sure that we can call some action cerator and get some data into our component automaticaly.
//we will hook reduxform function to the bottom and pass an object in it for configuration. connect() takes seperate arguments into it, reduxform() instead receives object
//after hooking up reduxForm, this compoenent now will have passed on a lot of additonal props.
//<Field /> component is imported from reduxForm at the top. it is used to show anykind of filed to user. it need few props.
//name-> is the property that the filed is trying to manage
//Field componenet doesn;'t know how to show any field. to do so we have to assign a prop to it called component. this component will either ba a react component or a fuction for the filed to call
//this component or the function needs to return some elemnt that  is going to be showing on the screen
//for that we will add a helper method called renderInput
// <input {...formProps.input} />  here, total input object with its properties are added as props to input element
//we will destructure the <input {...formProps.input} />  and it will be <input {...input} />  like this

//validate input: fuction -> wire it up with redux
//The big connection between the validate() and getting msg into renderInput is all about field name.
