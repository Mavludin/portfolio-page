import { useState } from "react";

import { NavLink } from "react-router-dom";

import { navLinks } from "../../shared/projectData";
import PropTypes from "prop-types";
import { StyledMobileMenu } from "./styles";
import styles from './Header.module.css'

export const Header = () => {
  const [isChecked, setCheckBoxState] = useState(false);

  const renderedNavLinks = navLinks.map((item) => {
    return (
      <li key={item.id}>
        <NavLink
          onClick={() => setCheckBoxState(false)}
          activeClassName={styles.active}
          exact={true}
          to={item.pathName}
        >
          {item.name}
        </NavLink>
      </li>
    );
  });

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <StyledMobileMenu isChecked={isChecked}>
          <ul>{renderedNavLinks}</ul>
        </StyledMobileMenu>

        <div className={styles.mobileMenuToggle}>
          <div className={styles.menuBtn}>
            <input
              checked={isChecked}
              onChange={(e)=>setCheckBoxState(e.target.checked)}
              type="checkbox"
              id="menuCheckbox"
              className={styles.menuCheckBox}
            />
            <label htmlFor="menuCheckbox" className={styles.menuLabel}>
              <div className={styles.menuTextBar}></div>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
};

StyledMobileMenu.propTypes = {
  isChecked: PropTypes.bool
}