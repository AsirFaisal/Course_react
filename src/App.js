import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import About from "./components/About/About";
import Services from "./components/services/Services";
import Home from "./components/Home/Home";
import Notfound from "./components/Not found/Notfound";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
    </div>
  );
}

export default App;
