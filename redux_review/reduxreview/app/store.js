/*
Redux store created under this js file. 
*/
import { configureStore } from "@reduxjs/toolkit";
// configure store is defined as a function in redux toolkit
// which takes an object as an argument
import counterReducer from '../features/counter/counterSlice';
// import the counter reducer from the counter slice 
// counter reducer is responsible for the state of the counter

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})