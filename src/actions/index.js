import streams from "../apis/streams"; //import baseurl
import { SIGN_IN, SIGN_OUT, CREATE_STREAM } from "./types";

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
  const response = await streams.post("/streams", formValues); //making a post request with axios, dispatch action with payload-> create reducer
  dispatch({
    type: CREATE_STREAM,
    payload: response.data
  });
};
