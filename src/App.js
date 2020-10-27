import React, { useEffect, useState } from 'react';
import './Main.css';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import {Header} from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import {HomePage} from './containers/HomePage/HomePage';
import {Sidebar} from './components/Sidebar/Sidebar';
import {AboutPage} from './containers/About/About';
import {SkillsPage} from './containers/Skills/Skills';
import {Portfolio} from './containers/Portfolio/Portfolio';

import { Route, Switch, useHistory, useLocation } from 'react-router-dom';

import {navigate, scrollToTop} from './utils/projectFunctions';

import { navLinks } from './utils/projectData';
import { Arrows } from './components/Arrows/Arrows';

const App = () => {

  const [allowWheel, setAllowWheel] = useState(true);

  const nav = {
    history: useHistory(),
    location: useLocation()
  }

  useEffect(() => {

    const handleResize = () => {
      if (window.matchMedia("(min-width: 836px)").matches) {
        setAllowWheel(true)
      } else {
        setAllowWheel(false)
      }
    }
    
    handleResize()

    window.addEventListener('resize', handleResize)

    const handleWheel = (e) => {

      if (allowWheel) {
        if (e.deltaY > 0) {
          navigate(navLinks, nav, 'next')
        } else {
          navigate(navLinks, nav, 'prev')
        }
      } else return false

    }

    window.addEventListener('wheel', handleWheel)

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('wheel', handleWheel)
    } 

  }, [allowWheel, nav])

  useEffect(() => {
    nav.history.listen((location, action) => { scrollToTop() });
  }, [nav])

  return (

    <div className="App">

      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <Header />
      <Sidebar />
      <Arrows />

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

      <Footer />

    </div>
  );
}

export default App