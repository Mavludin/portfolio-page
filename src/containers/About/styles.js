import styled from "styled-components";

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