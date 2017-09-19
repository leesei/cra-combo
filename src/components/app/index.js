import React from 'react';
import { Route, Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import HomeIcon from 'material-ui/svg-icons/action/home';
import InfoIcon from 'material-ui/svg-icons/action/info';

import Home from '../home';
import About from '../about';

const App = () => (
  <div>
    <header>
      <Link to="/">
        <FlatButton icon={<HomeIcon />} />
      </Link>
      <Link to="/about-us">
        <FlatButton icon={<InfoIcon />} />
      </Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
);

export default App;
