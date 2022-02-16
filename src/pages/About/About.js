import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import astronaut from "../../assets/images/about/astronaut.svg";
import { cacheImages } from "../../shared/projectFunctions";
import { StyledAstronaut } from "./styles";
import styles from './About.module.css'

export const AboutPage = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    cacheImages([{thumbnail: astronaut}], setIsLoading)
  }, [])

  return (
    <div className={`${styles.about} flexContent`}>
      <h1 datatype="What do I do?">What do I do?</h1>

      <StyledAstronaut isLoading={isLoading} />

      <p style={{marginTop: '20px'}}>
        I build web sites and applications with React JS.
      </p>
      <p>See what I use for that on <Link to="/skills"> the next page. </Link></p>
    </div>
  );
};

StyledAstronaut.propTypes = {
  isLoading: PropTypes.bool
}