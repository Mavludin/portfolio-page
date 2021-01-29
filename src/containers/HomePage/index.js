import { Link } from "react-router-dom";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { StyledHomePage } from "./styles";

export const HomePage = () => {
  return (
    <StyledHomePage className='homePage flexContent'>
      <h1>
        {" "}
        Hello, I'm <span>Mavludin</span> <br /> A front-end web developer{" "}
      </h1>
      <Link to="/about" className='redBtn'>
        <span>Get to know more</span>
        <ArrowForwardIcon />
      </Link>
    </StyledHomePage>
  );
};
