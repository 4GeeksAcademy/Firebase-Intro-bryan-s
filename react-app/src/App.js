import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const backendHostUrl = 'https://hyllus478-fictional-space-spork-xjp7745gjvw34pp-5001.preview.app.github.dev/'

function App() {
  useEffect(() => {
    (async () => {
      const res = await fetch(
        "http://127.0.0.1:5001/geeks-firebase-72e6d/us-central1/helloWorld"
      );

      const data = await res.json();

      console.log("The res: ", data);
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
