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
import scrollAndPageFlip from './Utils/PageFlipAndScrollTop';

class App extends React.Component {

  componentDidMount() {
    document.querySelector('.MainBlock').scrollTop = '0';
    document.querySelector('audio').volume = 0.5;
  }

  goToPrevPage = () => {
    const allPaths = ['/', '/about', '/skills', '/portfolio'];

    allPaths.map((item,pos,array)=>{

      if (item === this.props.location.pathname) {
        if (pos === 0) {
          this.props.history.push(array[array.length-1])
        } else this.props.history.push(array[pos-1])
      }
    })
  }

  goToNextPage = () => {
    const allPaths = ['/', '/about', '/skills', '/portfolio'];

    allPaths.map((item,pos,array)=>{

      if (item === this.props.location.pathname) {
        if (pos === array.length-1) {
          this.props.history.push(array[0])
        } else this.props.history.push(array[pos+1])
      }
    })
  }

  render() {
    return (

        <div className="App">
  
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <Header />
        <Sidebar />

        <div onClick={()=>{this.goToPrevPage();scrollAndPageFlip()}} className="mobileNav prevPage"><i className="fas fa-angle-left"></i></div>
        <div onClick={()=>{this.goToNextPage();scrollAndPageFlip()}} className="mobileNav nextPage"><i className="fas fa-angle-right"></i></div>

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
    );
  }
}

export default withRouter(App);