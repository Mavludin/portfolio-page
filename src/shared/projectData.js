import React from "react";

import html5Icon from "../assets/images/skills/html-5.svg";
import css3Icon from "../assets/images/skills/css-3.svg";
import jsIcon from "../assets/images/skills/js.svg";
import reactIcon from "../assets/images/skills/react.svg";
import reduxIcon from "../assets/images/skills/redux.svg";
import gitIcon from "../assets/images/skills/git.svg";

import pizzaShopThumbnail from '../assets/images/projects/pizza-shop.jpg'
import musicPlayerThumbnail from '../assets/images/projects/m-player.jpg'
import adminPageThumbnail from '../assets/images/projects/admin-page.jpg'

import { HomePage } from "../pages/HomePage/HomePage";
import { AboutPage } from "../pages/About/About";
import { SkillsPage } from "../pages/Skills/Skills";
import { Projects } from "../pages/Projects/Projects";

import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

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
    name: "Projects",
    pathName: "/projects",
  },
];

export const routes = [
  { exact: true, path: "/", name: "HomePage", Component: HomePage, ref: React.createRef() },
  { exact: false, path: "/about", name: "AboutPage", Component: AboutPage, ref: React.createRef() },
  { exact: false, path: "/skills", name: "SkillsPage", Component: SkillsPage, ref: React.createRef() },
  { exact: false, path: "/projects", name: "Projects", Component: Projects, ref: React.createRef() },
];

export const projects = [
  {
    id: 1,
    title: 'Pizza Shop',
    ref: 'https://mavludin-pizza-shop.netlify.app/',
    thumbnail: pizzaShopThumbnail,
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
    thumbnail: musicPlayerThumbnail,
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
    thumbnail: adminPageThumbnail,
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

export const socials = [
  {
    id: 1,
    ref: 'mailto:imevlud@gmail.com',
    Content: MailIcon
  },
  {
    id: 2,
    ref: 'https://www.linkedin.com/in/mavludin-abdulkadirov-a7b037167/',
    Content: LinkedInIcon
  },
  {
    id: 3,
    ref: 'https://github.com/Mavludin',
    Content: GitHubIcon
  },
  {
    id: 4,
    ref: 'https://twitter.com/_mavludin',
    Content: TwitterIcon
  },
  {
    id: 5,
    ref: 'https://instagram.com/icukengw/',
    Content: InstagramIcon
  },
]
