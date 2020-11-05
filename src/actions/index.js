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
