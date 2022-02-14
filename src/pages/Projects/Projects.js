import { useEffect, useState } from "react";

import loader from "../../assets/images/projects/loader.svg";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { cacheImages } from "../../shared/projectFunctions";
import { projects } from "../../shared/projectData";
import { Fragment } from "react";
import { StyledItemInner, StyledLoader } from "./styles";
import styles from "./Projects.module.css";

import PropTypes from "prop-types";

export const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    cacheImages(projects, setIsLoading);
  }, []);

  return (
    <div className={`${styles.projects} flexContent`}>
      <h1 datatype="My recent works">My recent works</h1>
      <div className={styles.content}>
        {projects.map((item) => {
          return (
            <div key={item.id} className={styles.item}>
              <h2>{item.title}</h2>
              <StyledItemInner
                isLoading={isLoading}
                url={item.thumbnail}
              >
                <StyledLoader isLoading={isLoading}>
                  <img src={loader} alt="Loader" />
                </StyledLoader>
                <a
                  href={item.ref}
                  className={styles.redBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Take a look</span> <ArrowForwardIcon />
                </a>
                <p className={styles.tools}>
                  {item.tools.map((item) => {
                    return (
                      <Fragment key={item.id}>
                        <img src={item.src} alt={item.alt} />
                      </Fragment>
                    );
                  })}
                </p>
              </StyledItemInner>
            </div>
          );
        })}
      </div>
    </div>
  );
};

StyledLoader.propTypes = {
  isLoading: PropTypes.bool,
};

StyledItemInner.propTypes = {
  url: PropTypes.string,
  isLoading: PropTypes.bool,
};
