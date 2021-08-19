import styled from "styled-components";

export const StyledSkills = styled.div`
  .skills {
    width: 100%;
  }

  .skillsContent {
    display: flex;
    justify-content: space-around;
  }

  .skillsContent > div {
    height: 100%;
  }

  & li {
    border-bottom: 2px solid transparent;
    font-size: 1.2em;
    width: 100%;
  }

  & img {
    max-width: 32px;
    margin-right: 10px;
    vertical-align: middle;
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

  & li:hover .spinIcon {
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

    & {
      display: block !important;
      height: auto !important;
    }

    .skillsContent {
      display: block;
    }

    .skillsContent > div {
      width: 100%;
      margin-bottom: 20px
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
