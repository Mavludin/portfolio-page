import React from 'react';
import './Main.css';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import HomePage from './containers/homepage/homepage';
import Sidebar from './components/sidebar/sidebar';
import AboutPage from './containers/about/about';
import SkillsPage from './containers/skills/skills';
import Portfolio from './containers/portfolio/portfolio';

import { Route, BrowserRouter, Switch, withRouter } from 'react-router-dom';

import pageFlipAudio from './sound/page-flip.mp3';

class App extends React.Component {

  componentDidMount() {
    document.querySelector('.MainBlock').scrollTop = '0';
    document.querySelector('audio').volume = 0.5;
  }

  render() {
    return (

      <BrowserRouter>
        <div className="App">
  
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <Header />
        <Sidebar />

          <Route render={({location})=>(
            <TransitionGroup className="MainBlock">
            <CSSTransition key={location.key} timeout={1000} classNames="fade">
               <Switch location={location}>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/skills" component={SkillsPage} />
                <Route exact path="/portfolio" component={Portfolio} />
              </Switch>
             </CSSTransition>
          </TransitionGroup>

          )} />
          <audio src={pageFlipAudio}></audio>
        <Footer />
          
        </div>
      </BrowserRouter>
    );
  }
}

export default withRouter(App);
