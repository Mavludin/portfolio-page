import React from 'react';
import './App.css';

import Footer from './components/footer/footer';
import HomePage from './containers/homepage/homepage';
import Sidebar from './components/sidebar/sidebar';
import AboutPage from './containers/about/about';
import SkillsPage from './containers/skills/skills';

import { Route, BrowserRouter, Switch } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
      <div className="App">

      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      
        <Sidebar />
        <div>
          <Switch>
            <Route path="/about" component={AboutPage} />
            <Route path="/skills" component={SkillsPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
