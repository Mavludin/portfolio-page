import styled from "styled-components";
import astronaut from "../../assets/images/about/astronaut.svg";
import overlay from "../../assets/images/about/overlay.png";

export const StyledAbout = styled.div`

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
    width: 200px;
    min-width: 150px;
    margin-bottom: 20px;
    transition: .3s;

    /* min-height: ${({ isLoading }) => isLoading ? 0 : '195px'}; */
    height: 195px;
    /* background-image: url(${astronaut});s */
    background-image: url(${({ isLoading }) => isLoading ? overlay : astronaut});
    transform: translateX(${({ isLoading }) => isLoading ? '-100%' : 0});
    opacity: translateX(${({ isLoading }) => isLoading ? 0 : 1});

    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  @media screen and (max-width: 600px) {
    .astronaut {
      width: 150px;
    }
    p {
      text-align: justify
    }
  }

`