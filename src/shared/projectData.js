import React from "react";

import jsIcon from "../assets/images/skills/js.svg";
import tsIcon from "../assets/images/skills/typescript.svg";
import reactIcon from "../assets/images/skills/react.svg";
import reduxIcon from "../assets/images/skills/redux.svg";
import GitIcon from "../assets/images/skills/git.svg";
import materialUI from "../assets/images/skills/materail-ui.png";
import antdIcon from "../assets/images/skills/antd.png";
import chartsIcon from "../assets/images/skills/charts.png";
import reactQueryIcon from "../assets/images/skills/react-query.png";

import pizzaShopThumbnail from '../assets/images/projects/pizza-shop.jpg'
import musicPlayerThumbnail from '../assets/images/projects/m-player.jpg'
import adminPageThumbnail from '../assets/images/projects/admin-page.jpg'
import contactListThumbnail from '../assets/images/projects/contact-list.jpg'
import todoListThumbnail from '../assets/images/projects/to-do-list.jpg'
import labyrinthThumbnail from '../assets/images/projects/labyrinth.jpg'

import { HomePage } from "../pages/HomePage/HomePage";
import { AboutPage } from "../pages/About/About";
import { SkillsPage } from "../pages/Skills/Skills";
import { Projects } from "../pages/Projects/Projects";

import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

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
        src: jsIcon,
        alt: 'JavaScript'
      },
      {
        id: 2,
        src: reactIcon,
        alt: 'React JS'
      },
      {
        id: 3,
        src: GitIcon,
        alt: 'Git'
      },
      {
        id: 4,
        src: reduxIcon,
        alt: 'Redux'
      },
      {
        id: 5,
        src: reactQueryIcon,
        alt: 'React Query'
      },
      {
        id: 6,
        src: materialUI,
        alt: 'Material UI'
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
        src: jsIcon,
        alt: 'JavaScript'
      },
      {
        id: 2,
        src: reactIcon,
        alt: 'React JS'
      },
      {
        id: 3,
        src: GitIcon,
        alt: 'Git'
      },
      {
        id: 4,
        src: reduxIcon,
        alt: 'Redux'
      },
      {
        id: 5,
        src: materialUI,
        alt: 'Material UI'
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
        src: jsIcon,
        alt: 'JavaScript'
      },
      {
        id: 2,
        src: reactIcon,
        alt: 'React JS'
      },
      {
        id: 3,
        src: GitIcon,
        alt: 'Git'
      },
      {
        id: 4,
        src: reduxIcon,
        alt: 'Redux'
      },
      {
        id: 5,
        src: chartsIcon,
        alt: 'Charts'
      },
    ]
  },

  {
    id: 4,
    title: 'Contact list',
    ref: 'https://mavludin-contact-list.netlify.app/',
    thumbnail: contactListThumbnail,
    tools: [
      {
        id: 1,
        src: jsIcon,
        alt: 'JavaScript'
      },
      {
        id: 2,
        src: reactIcon,
        alt: 'React JS'
      },
      {
        id: 3,
        src: GitIcon,
        alt: 'Git'
      },
      {
        id: 4,
        src: reduxIcon,
        alt: 'Redux'
      },
      {
        id: 5,
        src: materialUI,
        alt: 'Material UI'
      },
    ]
  },

  {
    id: 5,
    title: 'To-do list',
    ref: 'https://mavludin-todo-list.netlify.app/',
    thumbnail: todoListThumbnail,
    tools: [
      {
        id: 1,
        src: tsIcon,
        alt: 'TypeScript'
      },
      {
        id: 2,
        src: reactIcon,
        alt: 'React JS'
      },
      {
        id: 3,
        src: GitIcon,
        alt: 'Git'
      },
      {
        id: 4,
        src: reduxIcon,
        alt: 'Redux'
      },
      {
        id: 5,
        src: antdIcon,
        alt: 'Ant Design'
      },
    ]
  },

  {
    id: 6,
    title: 'Labyrinth game',
    ref: 'https://mavludin-labyrinth-game.netlify.app/',
    thumbnail: labyrinthThumbnail,
    tools: [
      {
        id: 1,
        src: jsIcon,
        alt: 'JavaScript'
      },
      {
        id: 2,
        src: reactIcon,
        alt: 'React JS'
      },
      {
        id: 3,
        src: GitIcon,
        alt: 'Git'
      },
      {
        id: 4,
        src: reduxIcon,
        alt: 'Redux'
      },
      {
        id: 5,
        src: antdIcon,
        alt: 'Ant Design'
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
    ref: 'https://Github.com/Mavludin',
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
  {
    id: 6,
    ref: 'https://www.youtube.com/c/maxwellcoding',
    Content: YouTubeIcon
  },
]
