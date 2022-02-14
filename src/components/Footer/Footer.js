import { socials } from "../../shared/projectData";
import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contacts}>
        {
          socials.map(item => {
            return (
              <a
                key={item.id}
                href={item.ref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <item.Content />
              </a>
            )
          })
        }
      </div>
    </footer>
  );
};
