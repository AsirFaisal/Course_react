import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Services from "../services/Services";
import Notfound from "../Not found/Notfound";
import Contact from "../Contact/Contact";

const NavBar = () => (
  <BrowserRouter>
    <header className="navbar">
      <div className="navbar__title navbar__item">Skill Up</div>
      <div className="navbar__item">
        <Link style={{ textDecoration: "none", color: "#F57408" }} to="/home">
          Home
        </Link>
      </div>
      <div className="navbar__item">
        <Link style={{ textDecoration: "none", color: "#F57408" }} to="/about">
          About
        </Link>
      </div>
      <div className="navbar__item">
        <Link
          style={{ textDecoration: "none", color: "#F57408" }}
          to="/services"
        >
          Courses
        </Link>
      </div>
      <div className="navbar__item">
        <Link
          style={{ textDecoration: "none", color: "#F57408" }}
          to="/contact"
        >
          Contact
        </Link>
      </div>
    </header>

    <div>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/services">
          <Services />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route path="/*">
          <Notfound></Notfound>
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
);
export default NavBar;
