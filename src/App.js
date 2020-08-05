import React, { useEffect } from 'react';
import './Main.css';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import HomePage from './containers/homepage/homepage';
import Sidebar from './components/sidebar/sidebar';
import AboutPage from './containers/about/about';
import SkillsPage from './containers/skills/skills';
import Portfolio from './containers/portfolio/portfolio';

import { Route, Switch, withRouter } from 'react-router-dom';

import pageFlipAudio from './sound/page-flip.mp3';
import scrollAndPageFlip from './utils/PageFlipAndScrollTop';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const App = (props) => {

  useEffect(() => {
    document.querySelector('.MainBlock').scrollTop = '0';
    setTimeout(() => {
      document.querySelector('audio').volume = 0.2;
    }, 0);
  })

  const goToPrevPage = () => {
    const allPaths = ['/', '/about', '/skills', '/portfolio'];

    allPaths.map((item, pos, array) => {
      if (item === props.location.pathname) {
        if (pos === 0) {
          props.history.push(array[array.length - 1])
        } else props.history.push(array[pos - 1])
      }
      return true
    })
  }

  const goToNextPage = () => {
    const allPaths = ['/', '/about', '/skills', '/portfolio'];

    allPaths.map((item, pos, array) => {
      if (item === props.location.pathname) {
        if (pos === array.length - 1) {
          props.history.push(array[0])
        } else props.history.push(array[pos + 1])
      }
      return true
    })
  }

  return (

    <div className="App">

      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <Header />
      <Sidebar />

      <div onClick={() => { goToPrevPage(); scrollAndPageFlip() }} className="mobileNav prevPage"><NavigateBeforeIcon /></div>
      <div onClick={() => { goToNextPage(); scrollAndPageFlip() }} className="mobileNav nextPage"><NavigateNextIcon /></div>

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