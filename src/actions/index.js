import streams from "../apis/streams"; //import baseurl
import { SIGN_IN, SIGN_OUT } from "./types";

//will receive userId as an argument and add it to the payload property
export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};
export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

//action creator for api. this is an async action creator. we nuse redux-thunk here.
export const createStream = formValues => async dispatch => {
  streams.post("/streams", formValues); //making a post request with axios
};
