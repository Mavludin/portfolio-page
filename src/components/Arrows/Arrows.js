import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { navigate } from "../../shared/projectFunctions";
import { navLinks } from "../../shared/projectData";
import { useHistory, useLocation } from "react-router";
import styled from "styled-components";
import { Fragment } from "react";

export const Arrows = () => {
  const nav = {
    history: useHistory(),
    location: useLocation(),
  };

  return (
    <Fragment>
      <StyledArrow
        onClick={() => navigate(navLinks, nav, "prev")}
        className='prev'
      >
        <NavigateBeforeIcon />
      </StyledArrow>
      <StyledArrow
        onClick={() => navigate(navLinks, nav, "next")}
        className='next'
      >
        <NavigateNextIcon />
      </StyledArrow>
    </Fragment>
  );
};

const StyledArrow = styled.div`
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