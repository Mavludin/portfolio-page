import { StyledFooter } from "./styles";
import { socials } from "../../shared/projectData";

export const Footer = () => {
  return (
    <StyledFooter>
      <div className='contacts'>
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
    </StyledFooter>
  );
};
