import React from "react";

import html5Icon from "../assets/images/html-5.svg";
import css3Icon from "../assets/images/css-3.svg";
import jsIcon from "../assets/images/js.svg";
import reactIcon from "../assets/images/react.svg";
import reduxIcon from "../assets/images/redux.svg";
import gitIcon from "../assets/images/git.svg";

import { HomePage } from "../containers/HomePage/HomePage";
import { AboutPage } from "../containers/About/About";
import { SkillsPage } from "../containers/Skills/Skills";
import { Portfolio } from "../containers/Portfolio/Portfolio";

export const navLinks = [
  {
    id: 1,
    name: "Home",
    pathName: "/",
  },
  {
    id: 2,
    name: "About Me",
    pathName: "/about",
  },
  {
    id: 3,
    name: "My Skills",
    pathName: "/skills",
  },
  {
    id: 4,
    name: "Portfolio",
    pathName: "/portfolio",
  },
];

export const routes = [
  { path: "/", name: "HomePage", Component: HomePage, ref: React.createRef() },
  { path: "/about", name: "AboutPage", Component: AboutPage, ref: React.createRef() },
  { path: "/skills", name: "SkillsPage", Component: SkillsPage, ref: React.createRef() },
  { path: "/portfolio", name: "Portfolio", Component: Portfolio, ref: React.createRef() },
];

export const portfolioData = [
  {
    id: 1,
    title: 'E-commerce',
    ref: 'https://mavludin-e-commerce.netlify.com/',
    thumbnail: require('../assets/images/portfolio/e-com.jpg').default,
    tools: [
      {
        id: 1,
        src: html5Icon,
        alt: 'Html 5 icon'
      },
      {
        id: 2,
        src: css3Icon,
        alt: 'Css 3 icon'
      },
      {
        id: 3,
        src: jsIcon,
        alt: 'Js icon'
      },
      {
        id: 4,
        src: reactIcon,
        alt: 'React icon'
      },
      {
        id: 5,
        src: gitIcon,
        alt: 'Git icon'
      },
      {
        id: 6,
        src: reduxIcon,
        alt: 'Redux icon'
      },
    ]
  },

  {
    id: 2,
    title: 'Music Player',
    ref: 'https://mavludin-music-player.netlify.com/',
    thumbnail: require('../assets/images/portfolio/m-player.jpg').default,
    tools: [
      {
        id: 1,
        src: html5Icon,
        alt: 'Html 5 icon'
      },
      {
        id: 2,
        src: css3Icon,
        alt: 'Css 3 icon'
      },
      {
        id: 3,
        src: jsIcon,
        alt: 'Js icon'
      },
      {
        id: 4,
        src: reactIcon,
        alt: 'React icon'
      },
      {
        id: 5,
        src: gitIcon,
        alt: 'Git icon'
      },
    ]
  },

  {
    id: 3,
    title: 'Admin page',
    ref: 'https://react-admin-page.firebaseapp.com/',
    thumbnail: require('../assets/images/portfolio/admin-page.jpg').default,
    tools: [
      {
        id: 1,
        src: html5Icon,
        alt: 'Html 5 icon'
      },
      {
        id: 2,
        src: css3Icon,
        alt: 'Css 3 icon'
      },
      {
        id: 3,
        src: jsIcon,
        alt: 'Js icon'
      },
      {
        id: 4,
        src: reactIcon,
        alt: 'React icon'
      },
      {
        id: 5,
        src: gitIcon,
        alt: 'Git icon'
      },
      {
        id: 6,
        src: reduxIcon,
        alt: 'Redux icon'
      },
    ]
  },

]
