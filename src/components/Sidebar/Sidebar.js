import { NavLink } from "react-router-dom";
import pointDownIcon from "../../assets/images/aside/point-down.svg";
import styles from './Sidebar.module.css'

export const Sidebar = () => {
  return (
    <aside className={styles.asideNav}>
      <div>
        <img src={pointDownIcon} alt="Point down" />
      </div>
      <NavLink exact={true} activeClassName={styles.active} to="/">
        <div></div>
      </NavLink>
      <NavLink activeClassName={styles.active} exact to="/about">
        <div></div>
      </NavLink>
      <NavLink activeClassName={styles.active} exact to="/skills">
        <div></div>
      </NavLink>
      <NavLink activeClassName={styles.active} exact to="/projects">
        <div></div>
      </NavLink>
    </aside>
  );
};
