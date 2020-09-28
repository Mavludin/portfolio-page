import React, { useEffect } from 'react';
import './Main.css';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import {Header} from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import {HomePage} from './containers/HomePage/HomePage';
import {Sidebar} from './components/Sidebar/Sidebar';
import {AboutPage} from './containers/About/About';
import {SkillsPage} from './containers/Skills/Skills';
import {Portfolio} from './containers/Portfolio/Portfolio';

import { Route, Switch, withRouter } from 'react-router-dom';

import pageFlipAudio from './assets/audio/page-flip.mp3';
import {changePage, scrollAndPageFlipSound} from './utils/projectFunctions';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { navLinks } from './utils/projectData';

const App = (props) => {

  useEffect(() => {
    document.querySelector('.MainBlock').scrollTop = '0';
    setTimeout(() => {
      document.querySelector('audio').volume = 0.2;
    }, 0);
  }, [])


  return (

    <div className="App">

      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <Header />
      <Sidebar />

      <div 
        onClick={() => { changePage(navLinks, props, 'prev'); scrollAndPageFlipSound() }} 
        className="mobileNav prevPage">
        <NavigateBeforeIcon/>
      </div>
      <div 
        onClick={() => { changePage(navLinks, props, 'next'); scrollAndPageFlipSound() }} 
        className="mobileNav nextPage">
        <NavigateNextIcon />
      </div>

      <Route render={({ location }) => (
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
  );
}

export default withRouter(App);