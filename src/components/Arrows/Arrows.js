import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { navBack, navForward } from "../../shared/projectFunctions";
import { navLinks } from "../../shared/projectData";
import { Fragment, useState } from "react";
import styles from './Arrows.module.css'
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

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
      <div className={`${styles.arrows} ${styles.prev}`}
        onClick={handleBackwardsNav}
      >
        <NavigateBeforeIcon />
      </div>
      <div className={`${styles.arrows} ${styles.next}`}
        onClick={handleForwardNav}
      >
        <NavigateNextIcon />
      </div>
    </Fragment>
  );
};
