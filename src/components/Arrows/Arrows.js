import { Fragment } from "react";
import classes from "./Arrows.module.css";

import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { navigate } from "../../shared/projectFunctions";
import { navLinks } from "../../shared/projectData";
import { useHistory, useLocation } from "react-router";

export const Arrows = () => {
  const nav = {
    history: useHistory(),
    location: useLocation(),
  };

  return (
    <Fragment>
      <div
        onClick={() => navigate(navLinks, nav, "prev")}
        className={`${classes.MobileNav} ${classes.PrevPage}`}
      >
        <NavigateBeforeIcon />
      </div>
      <div
        onClick={() => navigate(navLinks, nav, "next")}
        className={`${classes.MobileNav} ${classes.NextPage}`}
      >
        <NavigateNextIcon />
      </div>
    </Fragment>
  );
};
