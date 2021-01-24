import { Link } from "react-router-dom";

import astronaut from "../../assets/images/about/astronaut.svg";
import styled from "styled-components";

export const AboutPage = () => {
  return (
    <StyledAbout className="about flex-content">
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

const StyledAbout = styled.div`
  h1 {
    margin: 0
  }

  p {
    text-align: center
  }

  a {
    color: #ed6464
  }

  .astronaut {
    display: block;
    width: 200px;
    margin-bottom: 20px
  }

  @media screen and (max-width: 600px) {
    .astronaut {
      width: 120px;
    }
    p {
      text-align: justify
    }
  }

`