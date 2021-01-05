import { useState } from "react";
import classes from "./Header.module.css";

import { NavLink } from "react-router-dom";

import { navLinks } from "../../utils/projectData";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledHeader = styled.header`
  display: none;
  width: 100%;
  height: 60px;
  position: relative;
  padding: 20px;
  z-index: 3;

  & nav {
    transform: ${({ isChecked }) =>
      isChecked ? "translateX(0%)" : "translateX(-100%)"};
    opacity: ${({ isChecked }) => (isChecked ? "1" : "0")};
  }

  @media screen and (max-width: 836px) {
    & {
      display: block;
    }
  }
`;

export const Header = () => {
  const [isChecked, setCheckBoxState] = useState(false);

  const renderedNavLinks = navLinks.map((item) => {
    return (
      <li key={item.id}>
        <NavLink
          onClick={() => setCheckBoxState(false)}
          activeClassName={classes.Active}
          exact={true}
          to={item.pathName}
        >
          {item.name}
        </NavLink>
      </li>
    );
  });

  return (
    <StyledHeader isChecked={isChecked}>
      <div className={classes.HeaderContent}>
        <nav className={classes.MobileMenu}>
          <ul>{renderedNavLinks}</ul>
        </nav>

        <div className={classes.MobileMenuToggle}>
          <div className={classes.MenuBtn}>
            <input
              checked={isChecked}
              onChange={(e)=>setCheckBoxState(e.target.checked)}
              type="checkbox"
              id="menuCheckbox"
              className={classes.MenuCheckBox}
            />
            <label htmlFor="menuCheckbox" className={classes.MenuLabel}>
              <div className={classes.MenuTextBar}></div>
            </label>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

StyledHeader.propTypes = {
  isChecked: PropTypes.bool
}