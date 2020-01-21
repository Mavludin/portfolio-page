import React from 'react';
import './Main.css';

import Footer from './components/footer/footer';
import HomePage from './containers/homepage/homepage';
import Sidebar from './components/sidebar/sidebar';
import AboutPage from './containers/about/about';
import SkillsPage from './containers/skills/skills';

import { Route, BrowserRouter, Switch } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (

      <BrowserRouter>
        <div className="App">
  
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        
          <Sidebar />
          <main>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/skills" component={SkillsPage} />
            </Switch>
          </main>
          <Footer />
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
