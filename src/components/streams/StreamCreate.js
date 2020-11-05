import React from "react";
//importing Field (component) and reduxForm (function)
import { Field, reduxForm } from "redux-form";

// const StreamCreate = () => {
//   return <div>StreamCreate</div>;
// };

class StreamCreate extends React.Component {
  //helper method for Field. it will be a controlled element
  renderInput({ input, label }) {
    // console.log(formProps);
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }
  //handleing submission
  onSubmit(formValues) {
    console.log(formValues);
  }
  render() {
    // console.log(this.props);
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="form">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="button">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: "streamCreate"
})(StreamCreate);

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
