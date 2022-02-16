import { Link } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styles from './HomePage.module.css'

export const HomePage = () => {
  return (
    <div className={`${styles.homePage} flexContent`}>
      <h1>
        {" "}
        Hello, I'm <span>Mavludin</span> <br /> A Front-end web developer{" "}
      </h1>
      <Link to="/about" className={styles.redBtn}>
        <span>Get to know more</span>
        <ArrowForwardIcon />
      </Link>
    </div>
  );
};
