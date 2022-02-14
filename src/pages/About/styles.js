import styled from "styled-components";
import astronaut from "../../assets/images/about/astronaut.svg";
import overlay from "../../assets/images/about/overlay.png";

export const StyledAstronaut = styled.div`
  width: 200px;
  min-width: 150px;
  min-height: 180px;
  transition: .3s;

  /* min-height: ${({ isLoading }) => isLoading ? 0 : '195px'}; */
  /* background-image: url(${astronaut});s */
  background-image: url(${({ isLoading }) => isLoading ? overlay : astronaut});
  transform: translateX(${({ isLoading }) => isLoading ? '-100%' : 0});
  opacity: translateX(${({ isLoading }) => isLoading ? 0 : 1});

  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  
  @media screen and (max-width: 600px) {
    & {
      width: 150px;
    }
  }

`