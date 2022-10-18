import {configureStore} from '@reduxjs/toolkit';
// import this store from the redux library

const reducerFunction  = (state = {counter:0}, action) => {
  // state is type, action is payload
// a constant called reducer function is created. 
// It takes in two parameters, state and action.
// it needs 2 properties, unique idenfitier and a payload.
  return state; 



}



const store = configureStore(reducerFunction)
// this needs a reducer. 
// the reducer is passed in as a parameter to configureStore.

export default store;
// export the store, in ordert to be used in other files.