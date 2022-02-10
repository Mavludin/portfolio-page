import styles from './Skills.module.css' 

import html5Icon from "../../assets/images/skills/html-5.svg";
import css3Icon from "../../assets/images/skills/css-3.svg";
import jsIcon from "../../assets/images/skills/js.svg";
import reactIcon from "../../assets/images/skills/react.svg";
import reduxIcon from "../../assets/images/skills/redux.svg";
import gitIcon from "../../assets/images/skills/git.svg";
import psIcon from "../../assets/images/skills/ps.svg";
import figmaIcon from "../../assets/images/skills/figma.svg";
import reactQueryIcon from "../../assets/images/skills/react-query.png";
import { Link } from "react-router-dom";

export const SkillsPage = () => {
  return (
    <div className={`${styles.skillsPage} flexContent`}>
      <h1 datatype="Skills">Skills</h1>

      <div className={styles.skills}>
        <div className={styles.skillsContent}>
          <div className={styles.langs}>
            <h2>Languages</h2>
            <ul>
              <li>
                <img src={html5Icon} alt="Html 5/images/skills/" />
                <span>HTML5</span>
              </li>
              <li>
                <img src={css3Icon} alt="Css 3/images/skills/" />
                <span>CSS3/SASS (SCSS)</span>
              </li>
              <li>
                <img
                  style={{ borderRadius: "20px" }}
                  src={jsIcon}
                  alt="JS"
                />
                <span>JavaScript</span>
              </li>
              <li>
                <img className={styles.spinIcon} src={reactIcon} alt="React/images/skills/" />
                <span>React JS</span>
              </li>
            </ul>
          </div>

          <div className={styles.devTools}>
            <h2>Dev Tools</h2>
            <ul>
              <li>
                <img src={gitIcon} alt="Git/images/skills/" />
                <span>Git</span>
              </li>
              <li>
                <img src={reduxIcon} alt="Redux/images/skills/" />
                <span>Redux</span>
              </li>
              <li>
                <img
                  src={reactQueryIcon}
                  alt="react query"
                />
                <span>React Query</span>
              </li>
            </ul>
          </div>

          <div className={styles.designTools}>
            <h2>Design Tools</h2>
            <ul>
              <li>
                <img src={psIcon} alt="Photoshop/images/skills/" />
                <span>Photoshop</span>
              </li>
              <li>
                <img src={figmaIcon} alt="Figma/images/skills/" />
                <span>Figma</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p>
        You must be wondering what I have done with all the things above.
        <br /> Well,
        <Link to="/projects"> here you go</Link>.
      </p>
    </div>
  );
};
