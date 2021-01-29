import { Link } from "react-router-dom";

import astronaut from "../../assets/images/about/astronaut.svg";
import { StyledAbout } from "./styles";

export const AboutPage = () => {
  return (
    <StyledAbout className="about flexContent">
      <h1 datatype="What do I do?">What do I do?</h1>

      <img className='astronaut' src={astronaut} alt="That's me" />

      <p>
        I build web sites and applications by utilizing the most progressive web
        technologies that you can get familiar with on
        <Link to="/skills"> the next page. </Link>
        During the development process, I adhere to the solutions that provide
        maximum user experience with a minimalist design.
      </p>
    </StyledAbout>
  );
};