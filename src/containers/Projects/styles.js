import styled from "styled-components";

export const StyledProjects = styled.div`

  .content {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
  }

  .item {
    width: 33.3%;
    max-width: 350px;
    height: 240px;
    text-align: center;
    padding: 5px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .item h2 {
    color: #ed6464;
  }

  .tools {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tools img {
    width: 32px
  }

  & .redBtn {
    font-size: 1em;
    border: 2px solid white;
    padding: 5px 15px;
    margin-bottom: 15px;

    display: flex;
    align-items: center;

    transition: background-color 0.2s;
  }

  & .redBtn svg {
    margin-left: 8px;
    width: 0.8em;
  }

  & .redBtn:hover {
    background-color: #ed6464;
    border-color: #ed6464;
  }

  & .redBtn:hover svg {
    animation: jumping 1s ease-out;
  }

  @keyframes jumping {
    0% {
      transform: translateX(10px);
    }

    20% {
      transform: translateX(0);
    }

    40% {
      transform: translateX(8px);
    }

    60% {
      transform: translateX(0);
    }

    80% {
      transform: translateX(4px);
    }

    80% {
      transform: translateX(0);
    }
  }

  @media screen and (max-width: 836px) {
    .item {
      width: 50%;
    }
  }

  @media screen and (max-width: 600px) {
    .item {
      width: 100%;
    }
  }
`;

export const StyledItemInner = styled.div`
  padding: 5px;
  height: 100%;
  width: 100%;
  border: 1px solid white;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  &::after {
    content: "";
    opacity: 1;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background: url(${({ url }) => url});
    pointer-events: ${({ isLoading }) => isLoading ? 'none' : 'all'};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    backface-visibility: hidden;
    border-radius: 10px;
    transition: 0.2s ease-in;
  }

  &:hover::after {
    opacity: 0.2;
    z-index: -1;
    transform: scale(1.05);
  }
`

export const StyledLoader = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1f1f1f;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s, z-index 0s 0.1s;

  opacity: ${({ isLoading }) => isLoading ? '1' : '0'};
  z-index: ${({ isLoading }) => isLoading ? '2' : '-1'};

  & img {
    width: fit-content;
  }

`
