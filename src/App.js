import React from 'react';
import './Main.css';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Footer from './components/footer/footer';
import HomePage from './containers/homepage/homepage';
import Sidebar from './components/sidebar/sidebar';
import AboutPage from './containers/about/about';
import SkillsPage from './containers/skills/skills';
import Portfolio from './containers/portfolio/portfolio';

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

          {/* <Route render={({location})=>(
            <TransitionGroup>
            <CSSTransition key={location.key} timeout={300} classNames="fade"> */}
               <Switch> {/*location={location}>*/ }
                <Route exact path="/" component={HomePage} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/skills" component={SkillsPage} />
                <Route exact path="/portfolio" component={Portfolio} />
              </Switch>
            {/* </CSSTransition>
          </TransitionGroup>
          )} /> */}

        </main>
        <Footer />
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
