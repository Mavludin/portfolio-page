import html5Icon from "../../assets/images/skills/html-5.svg";
import css3Icon from "../../assets/images/skills/css-3.svg";
import jsIcon from "../../assets/images/skills/js.svg";
import tsIcon from "../../assets/images/skills/typescript.svg";
import reactIcon from "../../assets/images/skills/react.svg";
import reduxIcon from "../../assets/images/skills/redux.svg";
import gitIcon from "../../assets/images/skills/git.svg";
import figmaIcon from "../../assets/images/skills/figma.svg";
import reactQueryIcon from "../../assets/images/skills/react-query.png";
import chartsIcon from "../../assets/images/skills/charts.png";
import materialUI from "../../assets/images/skills/materail-ui.png";
import antdIcon from "../../assets/images/skills/antd.png";
import webpackIcon from "../../assets/images/skills/webpack.png";

import { Link } from "react-router-dom";

import styles from './Skills.module.css' 

export const SkillsPage = () => {
  return (
    <div className={`${styles.skillsPage} flexContent`}>
      <h1 datatype="Skills">What I use</h1>

      <div className={styles.skills}>
        <div className={styles.skillsContent}>
          <div className={styles.langs}>
            <h2>Languages</h2>
            <ul>
              <li>
                <img src={html5Icon} alt="Html 5" />
                <span>HTML5</span>
              </li>
              <li>
                <img src={css3Icon} alt="CSS 3" />
                <span>CSS3</span>
              </li>
              <li>
                <img
                  style={{ borderRadius: "20px" }}
                  src={jsIcon}
                  alt="JavaScript"
                />
                <span>JavaScript</span>
              </li>
              <li>
                <img
                  src={tsIcon}
                  alt="TypeScript"
                />
                <span>TypeScript</span>
              </li>
              <li>
                <img className={styles.spinIcon} src={reactIcon} alt="React JS" />
                <span>React JS</span>
              </li>
            </ul>
          </div>

          <div className={styles.devTools}>
            <h2>Dev Tools</h2>
            <ul>
              <li>
                <img src={gitIcon} alt="Git" />
                <span>Git</span>
              </li>
              <li>
                <img src={webpackIcon} alt="Webpack" />
                <span>Webpack</span>
              </li>
              <li>
                <img src={reduxIcon} alt="Redux" />
                <span>Redux</span>
              </li>
              <li>
                <img
                  src={reactQueryIcon}
                  alt="React query"
                />
                <span>React Query</span>
              </li>
              <li>
                <img
                  src={chartsIcon}
                  alt="Charts"
                />
                <span>Charts</span>
              </li>
            </ul>
          </div>

          <div className={styles.designTools}>
            <h2>Design Tools</h2>
            <ul>
              <li>
                <img src={figmaIcon} alt="Figma" />
                <span>Figma</span>
              </li>
              <li>
                <img
                  src={materialUI}
                  alt="Material UI"
                />
                <span>Materail UI</span>
              </li>
              <li>
                <img
                  src={antdIcon}
                  alt="Ant Design"
                />
                <span>Ant Design</span>
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
