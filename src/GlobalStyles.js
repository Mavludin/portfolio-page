import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html, body {
    height: 100%;
  }
  
  body {
    margin: 0;
    position: relative;
    font-family: 'Poppins', sans-serif;
    color: white;
    background-color: #1f1f1f;
  }
  
  #root, .app {
    height: 100%;
  }
  
  .app {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items:center;
    overflow: hidden;
    min-height: max-content
  }
  
  .mainBlock {
    width: 100%;
    position: relative;
    height: calc(100% - 50px);
  }
  
  .flexContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    height: 100%
  }
  
  .page {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    max-width: 992px;
    width: 100%;
    height: 100%;
    z-index: 2;
    margin: 0 auto;
    padding: 0 10px;
  }
  
  .page-enter {
    opacity: 0;
    z-index: 1;
    transform: translateY(100%);
  }
  
  .page-enter-active {
    opacity: 1;
    transform: translateY(0%);
    transition: opacity 300ms, transform 1s;
  }
  
  .page-exit {
    opacity: 1;
    transform: translateY(0%);
  }
  
  .page-exit-active {
    opacity: 0;
    transform: translateY(-100%);
    transition: opacity 300ms, transform 1s;
  }
  
  h1 {
    font-size: 3em;
    position: relative;
    margin-bottom: 30px;
    text-align: center;
  }
  
  h1:hover::before {
    opacity: 1;
  }
  
  h1::before {
    content: attr(datatype);
    height: 100%;
    width: 100%;
    opacity: 0;
    position: absolute;
    z-index: -1;
    left: 5px;
    color: red;
    transition: .2s;
  }
  
  h2 {
    margin-bottom: 10px;
    color: #ED6464;
  }
  
  p {
    text-align: center;
    font-size: 1.2em;
  }
  
  ul {
    list-style-type: none;
  }
  
  a {
    text-decoration: none;
    color: white;
  }
  
  
  @media screen and (max-width: 1199px) {
    .page {
      padding: 0 40px;
    }
  }
  
  @media screen and (max-width: 991px) {
  
    h2 {
      font-size: 1.2em;
    }
  
    p {
      font-size: 1em;
    }
  
  }
  
  @media screen and (max-width: 900px) {
    h1 {
      font-size: 2.6em;
    }
  }
  
  @media screen and (max-width: 836px) {
    .app {
      justify-content: space-between;
      overflow: visible;
    }
  
    .mainBlock {
      overflow: scroll;
    }

  }
  
  @media screen and (max-width: 700px) {
  
    .page {
      padding: 0 35px;
    }
  
    h1 {
      font-size: 2em;
    }
  
  }
  
  @media screen and (max-width: 414px) {
  
    h1 {
      font-size: 1.6em;
    }
  
  }
`;
