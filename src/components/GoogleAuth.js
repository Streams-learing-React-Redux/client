import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends Component {
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
          // this.setState({ isSignedIn: this.auth.isSignedIn.get() })
          //not using the componenet state any more so...updating the auth state in redux store like below
          this.onAuthChange(this.auth.isSignedIn.get());
          //adding event listener with a call back function to it
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  //call back function for event listener
  //when we call sign in, we also want to pass in the id of the current user
  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
      //now we need to receive the id to action creator as an argument and pass it through the reducer by assigning the id to the action object as a payload property
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  //helper method to print if user loggedin or not
  renderAuthButton() {
    //not having state any more so passing the props
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="google-button">
          G Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="google-button">
          G Sign In
        </button>
      );
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

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);

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

//redux way one:
//inside component we got the clicks that access the gapi auth2 instances-> this lib will call onauth event handlr-> each time onauth is called we will call appropriate action creator -> signin / sign out for successfull signin or out -> they will return action that will be in auth reducer that will hold booolean according to currnt status of user sing in or not.. here we will move the state to redus store cause n\later lot of other componenets will need that state and if it statys in google auth component it will be so challanging to take state out of eevrytime for every use. rather it will be stored in redux store holding it as a boolean flag.  redux store will connect to google auth componenet as a prop whether user is signed in or out
