import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: relative;
  width: 100%;
  height: 50px;
  z-index: 2;

  .contacts {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    font-size: 1.2em;
    height: 100%;
  }

  .contacts a {
    width: 24px;
    height: 24px;
  }

  .contacts a + a {
    margin-left: 10px;
  }

  .contacts a img {
    width: 100%;
    height: 100%;
  }

  .contacts a path {
    transition: fill 0.2s;
  }

  .contacts a svg {
    transition: transform 0.2s;
  }

  .contacts a:hover path {
    fill: #ed6464;
  }

  .contacts a:hover svg {
    transform: scale(1.1);
  }
`;
