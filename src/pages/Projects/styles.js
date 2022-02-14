import styled from "styled-components";

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
