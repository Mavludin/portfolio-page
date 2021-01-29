import React, { useEffect, useRef, useState } from "react";

import { CSSTransition } from "react-transition-group";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Sidebar } from "./components/Sidebar";

import { Route, useHistory, useLocation } from "react-router-dom";

import { navigate } from "./shared/projectFunctions";

import { navLinks, routes } from "./shared/projectData";
import { Arrows } from "./components/Arrows";
import { Lines } from "./components/Lines";

export const App = () => {
  const [allowWheel, setAllowWheel] = useState(true);

  const nav = {
    history: useHistory(),
    location: useLocation(),
  };

  const handleWheel = () => {
    const handleResize = () => {
      if (window.matchMedia("(min-width: 836px)").matches) {
        setAllowWheel(true);
      } else {
        setAllowWheel(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    const handleWheel = (e) => {
      if (allowWheel) {
        if (e.deltaY > 0) {
          navigate(navLinks, nav, "next");
        } else {
          navigate(navLinks, nav, "prev");
        }
      } else return false;
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("wheel", handleWheel);
    };
  }

  useEffect(handleWheel, [handleWheel]);

  const mainBlock = useRef();

  useEffect(() => {
    nav.history.listen((location, action) => {
      mainBlock.current.scrollTop = '0'
    });
  }, [nav.history]);


  return (
    <div className="app">

      <Lines />
      <Header />
      <Sidebar />
      <Arrows />

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
      </div>

      <Footer />
    </div>
  );
};
