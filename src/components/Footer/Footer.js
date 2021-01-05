import React from "react";
import classes from "./Footer.module.css";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";
import TwitterIcon from "@material-ui/icons/Twitter";
import IGIcon from "@material-ui/icons/Instagram";
import styled from "styled-components";

const StyledFooter = styled.footer`
  position: relative;
  width: 100%;
  height: 50px;
  z-index: 2;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <div className={[classes.Contacts]}>
        <a
          href="mailto:imevlud@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MailIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/mavludin-abdulkadirov-a7b037167/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/Mavludin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://twitter.com/_mavludin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://instagram.com/icukengw/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IGIcon />
        </a>
      </div>
    </StyledFooter>
  );
};
