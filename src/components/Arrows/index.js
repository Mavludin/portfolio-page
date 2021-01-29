import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { navigate } from "../../shared/projectFunctions";
import { navLinks } from "../../shared/projectData";
import { useHistory, useLocation } from "react-router";
import { Fragment } from "react";
import { StyledArrow } from "./styles";

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
