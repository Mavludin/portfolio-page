import React, { useEffect, useState } from "react";
import "./Main.css";

import { CSSTransition } from "react-transition-group";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { HomePage } from "./containers/HomePage/HomePage";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { AboutPage } from "./containers/About/About";
import { SkillsPage } from "./containers/Skills/Skills";
import { Portfolio } from "./containers/Portfolio/Portfolio";

import { Route, useHistory, useLocation } from "react-router-dom";

import { navigate, scrollToTop } from "./utils/projectFunctions";

import { navLinks } from "./utils/projectData";
import { Arrows } from "./components/Arrows/Arrows";
import { Lines } from "./components/Lines/Lines";

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

  useEffect(() => {
    nav.history.listen((location, action) => {
      scrollToTop();
    });
  }, [nav.history]);

  const routes = [
    { path: "/", name: "HomePage", Component: HomePage, ref: React.createRef() },
    { path: "/about", name: "AboutPage", Component: AboutPage, ref: React.createRef() },
    { path: "/skills", name: "SkillsPage", Component: SkillsPage, ref: React.createRef() },
    { path: "/portfolio", name: "Portfolio", Component: Portfolio, ref: React.createRef() },
  ];

  return (
    <div className="App">

      <Lines />
      <Header />
      <Sidebar />
      <Arrows />

      <div className="MainBlock">
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
