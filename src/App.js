import React from "react";
import "./App.css";
import { NavLink, Switch, Route } from "react-router-dom";
import home from "./components/homePage";
import graphics from "./components/graphicsPage";
import interactive from "./components/interactivePage";
const App = () => (
  <div className="App">
    <Navigation />
    <Main />
  </div>
);

const Navigation = () => (
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
      <li>Persional Projects</li>
      <li>CV</li>
    </ul>
  </nav>
);

const Main = () => (
  <Switch>
    <Route exact path="/" component={home}></Route>
    <Route exact path="/graphics" component={graphics}></Route>
    <Route exact path="/interactive" component={interactive}></Route>
  </Switch>
);

export default App;
