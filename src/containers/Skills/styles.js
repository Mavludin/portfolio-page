import styled from "styled-components";

export const StyledSkills = styled.div`
  .skills {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
  }

  .skills > div {
    height: 100%;
  }

  & ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  & li {
    display: flex;
    align-items: center;
    border-bottom: 2px solid transparent;
    font-size: 1.2em;
    width: 100%;
  }

  & img {
    max-width: 32px;
    margin-right: 10px;
  }

  .spinIcon {
    animation: rotating 4s linear infinite;
  }

  & a {
    color: #ed6464;
    cursor: pointer;
  }

  & p {
    margin-top: 20px;
  }

  & li:hover .SpinIcon {
    animation-play-state: paused;
  }

  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  @media screen and (max-width: 836px) {

    .skills {
      flex-direction: column;
      padding-left: 0;
    }

    & ul {
      max-width: 185px;
      margin: 0 auto;
      align-items: flex-start;
    }

    .skills h2 {
      text-align: center;
    }

    .skills > div {
      margin-bottom: 20px;
      width: 100%;
    }

    & li {
      margin-left: 27px;
    }
  }

  @media screen and (max-width: 600px) {
    & ul {
      width: 170px;
    }

    & li {
      font-size: 1em;
    }
  }

  @media screen and (max-width: 436px) {
    & ul {
      padding: 0;
    }
  }
`;
