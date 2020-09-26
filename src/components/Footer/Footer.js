import React from 'react';
import classes from './Footer.module.css';
import '../../Main.css';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    position: relative;
    width: 100%;
    height: 50px;
    z-index: 2;
`

export const Footer = () => {
    return (
        <StyledFooter>
            <div className={[classes.Contacts]} >
                <a href="mailto:imevlud@gmail.com" target="_blank" rel="noopener noreferrer">
                    <MailIcon />
                </a>
                <a 
                    href="https://www.linkedin.com/in/mavludin-abdulkadirov-a7b037167/" 
                    target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon />
                </a>
                <a href="https://github.com/Mavludin" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon />
                </a>
            </div>
        </StyledFooter>
    )
}