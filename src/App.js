import React, { useEffect, useRef } from "react";

import { CSSTransition } from "react-transition-group";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Sidebar } from "./components/Sidebar";

import { Route, useHistory, useLocation } from "react-router-dom";

import { navLinks, routes } from "./shared/projectData";
import { Arrows } from "./components/Arrows";
import { Lines } from "./components/Lines";
import { Language } from "./components/Language";
import { useWheel } from "./shared/useWheel";
import { NoMatch } from "./containers/NoMatch/NoMatch";

export const App = () => {
  const nav = {
    history: useHistory(),
    location: useLocation(),
  };

  useWheel(nav);

  const mainBlock = useRef();

  useEffect(() => {
    nav.history.listen((location, action) => {
      mainBlock.current.scrollTop = "0";
    });
  }, [nav.history]);

  useEffect(() => {
    const match = navLinks.some(
      (link) => link.pathName === nav.location.pathname
    );
    if (!match) nav.history.push("/404");
  }, []);

  return (
    <div className="app">
      <Lines />
      <Header />
      <Sidebar />
      <Arrows />

      <Language />

      <div className="mainBlock" ref={mainBlock}>
        {routes.map(({ path, Component, ref }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={1000}
                classNames="page"
                unmountOnExit
                nodeRef={ref}
              >
                <div className="page" ref={ref}>
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
        <Route exact path="/404">
          <NoMatch />
        </Route>
      </div>

      <Footer />
    </div>
  );
};
