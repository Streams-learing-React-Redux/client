import React, { Component } from "react";

class GoogleAuth extends Component {
  state = { isSignedIn: null };

  componentDidMount() {
    // load the lib
    window.gapi.load("client:auth2", () => {
      // initialize object
      window.gapi.client
        .init({
          clientId:
            "819762222264-4tm36terdss63ng025irdmjd502f1uea.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          //refferns to the librery
          this.auth = window.gapi.auth2.getAuthInstance();
          //update the component state when user is signed in
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          //adding event listener with a call back function to it
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  //call back function for event listener
  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  //helper method to print if user loggedin or not
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>User status not known</div>;
    } else if (this.state.isSignedIn) {
      return <div>User currently signed in</div>;
    } else {
      return <div>User not signed in</div>;
    }
  }

  render() {
    return (
      <div>
        <div>{this.renderAuthButton()}</div>
      </div>
    );
  }
}

export default GoogleAuth;

//gapi is the librery is available via window scope.
//gapi.load means : load up all functions
//gapi.client.init: ininitalize cilent
//a callback function will be called when the librery is successfully loaded up into the gapi
// scope is: what part we need access?
//auth.signIn will pop up window(chedck google api documentation)

//in Auth:(goals)
//1. get the refernc auth object
//2. figure out is user signedin or not
//3. print that auth status on screen

//q: why .then after .load?
//ans: load only allows to get a signal or notification of when the loading process is complete by passing in a callback func. but while calling init, we do not have to use callback function, when we call init it returns a promise which is an object that will ensure us that the library has been successfully initialized, so by chaining up .then after .init, the arrow function will be invoked only after successful initializetion of gapi library. here we ill figure out if the user is currently signed in or not and then show it on the screen. for that we we will get a reference of that oauth object and save it on the component class

// when componentDidMount() is called, the component is already been rerender to the screen, so to update the content of this component we need to get the component to rerender. to do that we need to use component level state here.
// after initializing and getting access to the auth object, we will update component level state with wheather or not the user is currently signed in. when we update the state, the component will automaticalayy rerenderd we can printthe auth status

//after that, initailize the state object while defining our class component, before componenetdidmount(). we set it to null cause we do not know if the user is signedin or not signed in when the app first loads. so it we will not print anything at that moment
// here we will use a helper method renderAuthButton to print out the appropriate text.

//to update the state on screen:
//add a eventlistener
