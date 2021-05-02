import { NavLink } from "react-router-dom";

import pointDownIcon from "../../assets/images/aside/point-down.svg";
import { StyledAside } from "./styles";

export const Sidebar = () => {
  return (
    <StyledAside className="asideNav">
      <div>
        <img src={pointDownIcon} alt="Point down" />
      </div>
      <NavLink exact={true} activeClassName="active" to="/">
        <div></div>
      </NavLink>
      <NavLink activeClassName="active" exact to="/about">
        <div></div>
      </NavLink>
      <NavLink activeClassName="active" exact to="/skills">
        <div></div>
      </NavLink>
      <NavLink activeClassName="active" exact to="/projects">
        <div></div>
      </NavLink>
    </StyledAside>
  );
};
