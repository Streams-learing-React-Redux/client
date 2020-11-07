import streams from "../apis/streams"; //import baseurl
//import history object created in histry file to programmaticly navigate user
import history from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from "./types";

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

//action creator for create stream. this is an async action creator. we nuse redux-thunk here.
//we need to pass userId too to get user id
export const createStream = formValues => async (dispatch, getState) => {
  //destructuring userid
  const { userId } = getState().auth;
  const response = await streams.post("/streams", { ...formValues, userId }); //making a post request with axios, dispatch action with payload-> create reducer
  dispatch({
    type: CREATE_STREAM,
    payload: response.data
  });

  //programmatic navigation to get user back to root route
  history.push("/"); // we use push to automaticly navigate user around
};

//action creator for fetching all streams
export const fetchStreams = () => async dispatch => {
  const response = await streams.get("/streams");

  dispatch({
    type: FETCH_STREAMS,
    payload: response.data
  });
};

//action creator for fetching one stream
export const fetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({
    type: FETCH_STREAM,
    payload: response.data
  });
};

//action creator for deleting one stream
export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);
  dispatch({
    type: DELETE_STREAM,
    payload: id
  });
};

//action creator for editinging one stream
//put changes all properties, we need patch here so the user id stays,so the buttons stay on home page
export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.patch(`/streams/${id}`, formValues);
  dispatch({
    type: EDIT_STREAM,
    payload: response.data
  });
  history.push("/");
};

//to create all action creators all togather: make a table of:
//q: what route we are trying to make?
//q: what information each rqst type needs in terms of like id and updating with some info
//q: what will be the response in each case?
