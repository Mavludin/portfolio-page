import styled from "styled-components";

export const StyledArrow = styled.div`
  display: none;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  color: #ED6464;
  cursor: pointer;
  z-index: 3;

  svg {
    font-size: 3em
  }

  &.prev {
    left: 0
  }

  &.next {
    right: 0
  }

  @media screen and (max-width: 836px) {
    & {
      display: block;
    }
  }
`