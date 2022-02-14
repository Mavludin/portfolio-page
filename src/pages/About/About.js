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

      <p>
        I build web sites and applications by utilizing the most progressive web
        technologies that you can get familiar with on
        <Link to="/skills"> the next page. </Link>
        During the development process, I adhere to the solutions that provide
        maximum user experience with a minimalist design.
      </p>
    </div>
  );
};

StyledAstronaut.propTypes = {
  isLoading: PropTypes.bool
}