import _ from "lodash";
import {
  FETCH_STREAMS,
  FETCH_STREAM,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from "../actions/types";

const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload }; // returning a new state object , atake all key value pairs out of it and add it to a new object, then dynamically add a new key value pair, it will have a key of the stream id and the value is the actual stream itself
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case FETCH_STREAMS:
      return {};

    case DELETE_STREAM:
      return _.omit(state, action.payload); //using lodash to delete

    default:
      return state;
  }
};

export default streamReducer;
