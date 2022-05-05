import logo from "./logo.svg";
import "./assets/css/App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="container">
          <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <ul class="nav nav-pills">
              <li class="nav-item">
                <a href="#" class="nav-link active" aria-current="page">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  FAQs
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  About
                </a>
              </li>
            </ul>
          </header>
        </div>
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
