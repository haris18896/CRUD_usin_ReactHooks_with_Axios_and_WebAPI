import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link, Switch, Route} from 'react-router-dom';

import AddTutorial from './components/AddTutorial';
import TutorialList from './components/TutorialList';
import Tutorials from './components/Tutorials';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
          CRUD app
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/tutorials"} className="nav-link">
              Tutorials
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/tutorials"]} component={TutorialList} />
          <Route exact path="/add" component={AddTutorial} />
          <Route exact path="/tutorials/:id" component={Tutorials} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
