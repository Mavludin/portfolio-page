import styled from "styled-components";

export const StyledHomePage = styled.div`

  & {
    justify-content: center !important
  }

  & h1 span {
    color: #ed6464;
  }

  .redBtn {
    font-size: 1.5em;
    border: 2px solid white;
    padding: 5px 20px;

    display: flex;
    align-items: center;

    transition: background-color 0.2s;

    margin-top: 2%;
  }

  .redBtn svg {
    transform: rotate(90deg);
    margin-left: 10px;
  }

  .redBtn:hover {
    background-color: #ed6464;
    border-color: #ed6464;
  }

  .redBtn:hover svg {
    animation: jumping 1s ease-out;
  }

  @media screen and (max-width: 700px) {
    .redBtn {
      font-size: 1.2em;
    }
  }

  @media screen and (max-width: 600px) {
    & {
      overflow: visible;
    }
  }
`;
