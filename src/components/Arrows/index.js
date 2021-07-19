import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { navBack, navForward } from "../../shared/projectFunctions";
import { navLinks } from "../../shared/projectData";
import { useHistory, useLocation } from "react-router";
import { Fragment, useState } from "react";
import { StyledArrow } from "./styles";

export const Arrows = () => {
  const nav = {
    history: useHistory(),
    location: useLocation(),
  };

  const [allowNav, setAllowNav] = useState(true)

  const handleForwardNav = () => {
    if (allowNav) {
      setAllowNav(false);
      setTimeout(() => setAllowNav(true), 1000)
      navForward(navLinks, nav)
    }
  }

  const handleBackwardsNav = () => {
    if (allowNav) {
      setAllowNav(false);
      setTimeout(() => setAllowNav(true), 1000)
      navBack(navLinks, nav)
    }
  }

  return (
    <Fragment>
      <StyledArrow
        onClick={handleForwardNav}
        className='prev'
      >
        <NavigateBeforeIcon />
      </StyledArrow>
      <StyledArrow
        onClick={handleBackwardsNav}
        className='next'
      >
        <NavigateNextIcon />
      </StyledArrow>
    </Fragment>
  );
};
