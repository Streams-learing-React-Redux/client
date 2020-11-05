import { combineReducers } from "redux";
import authReducer from "./authReducer";
//importing reducer for from
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  auth: authReducer,
  form: formReducer
});

//redux form will manage all our form data inside our redux store . for that we need a reducer to our store. this reducer is created by redux form library.we installed it when we installed redux form. we have to pull out that reducer fromthe library and hook it up with the combinedReducer call in here. for that we will import reducer form redux-form -> asssign it to a particuler key inside of combined reducers call ->
