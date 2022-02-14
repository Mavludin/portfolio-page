import styled from "styled-components";

export const StyledMobileMenu = styled.nav`
  
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

  & ul {
    padding: 0;
  }

  & a {
    font-size: 2em;
    transition: color 0.4s;
  }

  & a:hover {
    color: #ed6464;
  }

  .mobileMenuToggle:hover .menuLabel::before,
  .mobileMenuToggle:hover .menuLabel::after,
  .mobileMenuToggle:hover .menuTextBar {
    background-color: ${({ isChecked }) =>
      isChecked ? "#ed6464" : "white"};
  }

  @media (max-width: 414px) {
  & a {
    font-size: 1.8em;
  }
}
`;
