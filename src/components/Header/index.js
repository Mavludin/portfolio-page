import { useState } from "react";

import { NavLink } from "react-router-dom";

import { navLinks } from "../../shared/projectData";
import PropTypes from "prop-types";
import { StyledHeader } from "./styles";

export const Header = () => {
  const [isChecked, setCheckBoxState] = useState(false);

  const renderedNavLinks = navLinks.map((item) => {
    return (
      <li key={item.id}>
        <NavLink
          onClick={() => setCheckBoxState(false)}
          activeClassName='active'
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
      <div className='headerContent'>
        <nav className='mobileMenu'>
          <ul>{renderedNavLinks}</ul>
        </nav>

        <div className='mobileMenuToggle'>
          <div className='menuBtn'>
            <input
              checked={isChecked}
              onChange={(e)=>setCheckBoxState(e.target.checked)}
              type="checkbox"
              id="menuCheckbox"
              className='menuCheckBox'
            />
            <label htmlFor="menuCheckbox" className='menuLabel'>
              <div className='menuTextBar'></div>
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