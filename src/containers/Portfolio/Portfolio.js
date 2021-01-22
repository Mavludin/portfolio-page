import { useEffect, useState } from "react";
import classes from "./Portfolio.module.css";

import loader from "../../assets/images/portfolio/loader.svg";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { cacheImages } from "../../shared/projectFunctions";
import { portfolioData } from "../../shared/projectData";
import styled from "styled-components";
import { Fragment } from "react";

import PropTypes from "prop-types";

export const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    cacheImages(portfolioData, setIsLoading);
  }, []);

  return (
    <div className={`${classes.PortfolioPage} flex-content`}>
      <h1 datatype="My recent works">My recent works</h1>
      <div className={classes.Content}>
        {
          portfolioData.map(item=>{
            return (
              <div key={item.id} className={classes.Item}>
                <h2>{item.title}</h2>
                <StyledItemInner
                  isLoading={isLoading}
                  url={item.thumbnail}
                  className={classes.ItemInner}
                >
                  <StyledLoader
                    isLoading={isLoading}
                    className={classes.Loader}
                  >
                   <img src={loader} alt="Loader" />
                  </StyledLoader>

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

const StyledLoader = styled.div`
  opacity: ${({ isLoading }) => isLoading ? '1' : '0'};
  z-index: ${({ isLoading }) => isLoading ? '2' : '-1'};
`

StyledLoader.propTypes = {
  isLoading: PropTypes.bool
}

const StyledItemInner = styled.div`
  &::after {
    background: url(${({ url }) => url});
    pointer-events: ${({ isLoading }) => isLoading ? 'none' : 'all'};
  }
`

StyledItemInner.propTypes = {
  url: PropTypes.string,
  isLoading: PropTypes.bool
}