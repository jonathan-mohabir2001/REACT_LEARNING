import './App.css';
/*
This react application will be implmenting a simple server created using the 
express framework provided by Node.js 

I understand react and how it works. Following files will contain 
more practise and other comments for demonstrating code understanding. 
*/
function App() {
  

  // the asynch arrow function below will be making the call to the express backend
    callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    // response constant set to fetch the address set from the get method in the express file
    const body = await response.json();
    // the constant body, is going to process the response from the fetch in json.

    if (response.status !== 200) {
      // if statement, if the status code is not a 200, then throw an error message
      throw Error(body.messaage);
    }

    return body;
    // body returned when calling back end api.
  };

  return (
    <div className="App">
      <header>
        <h1>This is a test application.</h1>
      </header>

      <h2>Basic server implmentation will be visited.</h2>
      <p className="App-intro">{this.state.data}</p>
    </div>
  );
}

export default App;
