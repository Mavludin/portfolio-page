import React, { useEffect, useState } from "react";
import classes from "./Portfolio.module.css";

import html5Icon from "../../assets/images/html-5.svg";
import css3Icon from "../../assets/images/css-3.svg";
import jsIcon from "../../assets/images/js.svg";
import reactIcon from "../../assets/images/react.svg";
import reduxIcon from "../../assets/images/redux.svg";
import gitIcon from "../../assets/images/git.svg";
import loader from "../../assets/images/portfolio/loader.svg";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { cacheImages } from "../../utils/projectFunctions";
import { images } from "../../utils/projectData";

export const Portfolio = ({ nodeRef }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    cacheImages(images, setIsLoading);
  }, []);

  return (
    <div ref={nodeRef} className={`${classes.PortfolioPage} flex-content Page`}>
      <h1 datatype="My recent works">My recent works</h1>

      {isLoading ? (
        <img className={classes.Loader} src={loader} alt="Loader" />
      ) : (
        <div className={classes.Content}>
          <div className={[classes.Item, classes.ECommerce].join(" ")}>
            <h2>E-commerce</h2>
            <div className={classes.ItemInner}>
              <a
                href="https://mavludin-e-commerce.netlify.com/"
                className={classes.RedBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Take a look</span> <ArrowForwardIcon />
              </a>
              <p className={classes.Tools}>
                <span>Tools: </span>
                <img src={html5Icon} alt="Html 5 icon" />
                <img src={css3Icon} alt="Css 3 icon" />
                <img src={jsIcon} alt="Js icon" />
                <img src={reactIcon} alt="React icon" />
                <img src={gitIcon} alt="Git icon" />
                <img src={reduxIcon} alt="Redux icon" />
              </p>
            </div>
          </div>
          <div className={[classes.Item, classes.MusicPlayer].join(" ")}>
            <h2>Music player</h2>
            <div className={classes.ItemInner}>
              <a
                href="https://mavludin-music-player.netlify.com/"
                className={classes.RedBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Take a look</span> <ArrowForwardIcon />
              </a>
              <p className={classes.Tools}>
                <span>Tools: </span>
                <img src={html5Icon} alt="Html 5 icon" />
                <img src={css3Icon} alt="Css 3 icon" />
                <img src={jsIcon} alt="Js icon" />
                <img src={reactIcon} alt="React icon" />
                <img src={gitIcon} alt="Git icon" />
              </p>
            </div>
          </div>
          <div className={[classes.Item, classes.AdminPage].join(" ")}>
            <h2>Admin page</h2>
            <div className={classes.ItemInner}>
              <a
                href="https://react-admin-page.firebaseapp.com/"
                className={classes.RedBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Take a look</span> <ArrowForwardIcon />
              </a>
              <p className={classes.Tools}>
                <span>Tools: </span>
                <img src={html5Icon} alt="Html 5 icon" />
                <img src={css3Icon} alt="Css 3 icon" />
                <img src={jsIcon} alt="Js icon" />
                <img src={reactIcon} alt="React icon" />
                <img src={gitIcon} alt="Git icon" />
                <img src={reduxIcon} alt="Redux icon" />
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
