import { useEffect, useState } from "react";
import classes from "./Portfolio.module.css";

import html5Icon from "../../assets/images/html-5.svg";
import css3Icon from "../../assets/images/css-3.svg";
import jsIcon from "../../assets/images/js.svg";
import reactIcon from "../../assets/images/react.svg";
import reduxIcon from "../../assets/images/redux.svg";
import gitIcon from "../../assets/images/git.svg";
import loader from "../../assets/images/portfolio/loader.svg";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { cacheImages } from "../../shared/projectFunctions";
import { images } from "../../shared/projectData";
import styled from "styled-components";
import { Fragment } from "react";

const StyledItemInner = styled.div`
  &::after {
    background: url(${({ url, isLoading }) => isLoading ? loader : url});
    background-color: ${({ isLoading }) => isLoading ? `#1f1f1f` : 'none'};
    background-size: ${({ isLoading }) => isLoading ? 'unset' : 'cover'};
  }
`
export const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    cacheImages(images, setIsLoading);
  }, []);

  const data = [
    {
      id: 1,
      title: 'E-commerce',
      ref: 'https://mavludin-e-commerce.netlify.com/',
      thumbnail: require('../../assets/images/portfolio/e-com.jpg').default,
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
      thumbnail: require('../../assets/images/portfolio/m-player.jpg').default,
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
      thumbnail: require('../../assets/images/portfolio/admin-page.jpg').default,
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

  return (
    <div className={`${classes.PortfolioPage} flex-content`}>
      <h1 datatype="My recent works">My recent works</h1>
      <div className={classes.Content}>
        {
          data.map(item=>{
            return (
              <div key={item.id} className={classes.Item}>
                <h2>{item.title}</h2>
                <StyledItemInner
                  url={item.thumbnail}
                  isLoading={isLoading}
                  className={classes.ItemInner}
                  style={{pointerEvents: isLoading ? 'none' : 'all'}}
                >
                  <a
                    href={item.ref}
                    className={classes.RedBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Take a look</span> <ArrowForwardIcon />
                  </a>
                  <p className={classes.Tools}>
                    {
                      item.tools.map(item=>{
                        return(
                          <Fragment key={item.id}>
                            <img src={item.src} alt={item.alt} />
                          </Fragment>
                        )
                      })
                    }
                  </p>
                </StyledItemInner>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};
