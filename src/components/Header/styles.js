import styled from "styled-components";

export const StyledHeader = styled.header`
  display: none;
  width: 100%;
  height: 60px;
  position: relative;
  padding: 15px;
  z-index: 3;

  .headerContent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
  }

  .mobileMenuToggle {
    width: 39px;
    position: relative;
    z-index: 4;
  }

  .mobileMenu {
    height: 100%;
    width: 100%;
    transform: translateX(-100%);
    opacity: 0;
    transition: 0.4s;
    position: fixed;
    top: 0;
    background-color: rgba(31, 31, 31, 0.9);
    padding: 16px;
    z-index: 4;
    left: 0;
    text-align: center;
    padding-top: 50px;

    transform: ${({ isChecked }) =>
      isChecked ? "translateX(0%)" : "translateX(-100%)"};
    opacity: ${({ isChecked }) => (isChecked ? "1" : "0")};
  }

  .mobileMenu ul {
    padding: 0;
  }

  .mobileMenu a {
    font-size: 2em;
    transition: color 0.4s;
  }

  .mobileMenu a:hover {
    color: #ed6464;
  }

  .active {
    color: #ed6464;
  }

  .menuBtn {
    width: 39px;
    overflow: hidden;
  }

  .menuCheckBox {
    display: none;
  }

  .menuLabel {
    position: relative;
    display: block;
    height: 29px;
    cursor: pointer;
  }

  .menuLabel::before,
  .menuLabel::after,
  .menuTextBar {
    position: absolute;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: #fff;
    transition: background-color 0.2s;
  }

  .menuLabel::before,
  .menuLabel::after {
    content: "";
    transition: 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55) left;
  }

  .menuLabel::before {
    top: 0;
  }

  .menuLabel::after {
    top: 12px;
  }

  .menuTextBar {
    top: 24px;
  }

  .menuTextBar::before {
    content: "MENU";
    position: absolute;
    top: 5px;
    right: 0;
    left: 0;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
    text-align: center;
  }

  .menuCheckBox:checked + .menuLabel::before {
    left: -39px;
  }

  .menuCheckBox:checked + .menuLabel::after {
    left: 39px;
  }

  .menuCheckBox:checked + .menuLabel .menuTextBar::before {
    animation: moveUpThenDown 0.8s ease 0.2s forwards,
      shakeWhileMovingUp 0.8s ease 0.2s forwards,
      shakeWhileMovingDown 0.2s ease 0.8s forwards;
  }

  .mobileMenuToggle:hover .menuLabel::before,
  .mobileMenuToggle:hover .menuLabel::after,
  .mobileMenuToggle:hover .menuTextBar {
    background-color: ${({ isChecked }) =>
      isChecked ? "#ed6464" : "white"};
  }

  @keyframes moveUpThenDown {
    0% {
      top: 0;
    }
    50% {
      top: -27px;
    }
    100% {
      top: -14px;
    }
  }

  @keyframes shakeWhileMovingUp {
    0% {
      transform: rotateZ(0);
    }
    25% {
      transform: rotateZ(-10deg);
    }
    50% {
      transform: rotateZ(0deg);
    }
    75% {
      transform: rotateZ(10deg);
    }
    100% {
      transform: rotateZ(0);
    }
  }

  @keyframes shakeWhileMovingDown {
    0% {
      transform: rotateZ(0);
    }
    80% {
      transform: rotateZ(3deg);
    }
    90% {
      transform: rotateZ(-3deg);
    }
    100% {
      transform: rotateZ(0);
    }
  }

  @media screen and (max-width: 836px) {
    & {
      display: block;
    }
  }
  
  @media (max-width: 414px) {
    .mobileMenu a {
      font-size: 1.8em;
    }
  }

`;
