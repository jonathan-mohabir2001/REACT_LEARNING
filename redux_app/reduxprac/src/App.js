import { useSelector } from 'react-redux';
// useSelector is a hook that allows for the store to be accessed by app.js

import './App.css';

function App() {

  const counter = useSelector((state) => state.counter)
  // this is a variable called counter.
  // it is set to the value of the counter in the store.


  return (
    <div >
    <h1>Counter Application </h1>
    <h2>Counter: {counter}</h2>



    </div>
  );
}

export default App;
