import React from "react";
import "./App.css";
import { NavLink, Switch, Route } from "react-router-dom";
import home from "./components/homePage";
import graphics from "./components/graphicsPage";
import interactive from "./components/interactivePage";
import personal from "./components/personalprojectPage";
const App = () => (
  <div className="App">
    <Navigation />
    <Main />
  </div>
);

const Navigation = () => (
  <div className="left">
    <h2 className="site-name">Yutong's Portfolio</h2>
    <nav>
      <ul>
        <li>
          <NavLink exact activeClassName="current" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="current" to="/graphics">
            Graphics
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="current" to="/interactive">
            Interactive
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="current" to="/personalproject">
            Personal Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

const Main = () => (
  <Switch>
    <Route exact path="/" component={home}></Route>
    <Route exact path="/graphics" component={graphics}></Route>
    <Route exact path="/interactive" component={interactive}></Route>
    <Route exact path="/personalproject" component={personal}></Route>
  </Switch>
);

export default App;
