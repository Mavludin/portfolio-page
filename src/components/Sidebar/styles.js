import styled from "styled-components";

export const StyledAside = styled.aside`

  position: fixed;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  min-height: 165px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  & > div {
    width: 38px;
    height: 38px;
    animation: swing 2s linear infinite;
    color: #ed6464;
  }

  & img {
    width: 100%;
    height: 100%;
  }

  & a div {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid white;
    cursor: pointer;

    transition: all 0.2s;
  }

  .active div, & a div:hover  {
    background-color: white;
  }

  & div + div {
    margin-top: 15px;
  }

  @media screen and (max-width: 1199px) {
    & {
      right: 15px;
    }
  }

  @media screen and (max-width: 991px) {
    & {
      right: 5px;
    }
  }

  @media screen and (max-width: 836px) {
    & {
      display: none;
    }
  }

  @keyframes swing {
    0% {
      transform: translateY(0);
    }

    25% {
      transform: translateY(4px);
    }

    50% {
      transform: translateY(6px);
    }

    75% {
      transform: translateY(4px);
    }

    100% {
      transform: translateY(0);
    }
  }
`;
