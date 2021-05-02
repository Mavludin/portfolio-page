import React from "react";
import { StyledLanguage } from './styles';
import { withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const LangSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1)
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(16.5px)",
      color: '#ed6464',
      "& + $track": {
        backgroundColor: '#1f1f1f',
        opacity: 1,
      }
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #fff",
    }
  },
  thumb: {
    width: 24,
    height: 24
  },
  track: {
    borderRadius: 26 / 2,
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
    border: "1px solid #ed6464",
    backgroundColor: '#ed6464'
  },
  checked: {},
  focusVisible: {}
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked
      }}
      {...props}
    />
  );
});

export const Language = () => {
  const [lang, setLang] = React.useState('EN');

  const handleChange = () => {
    if (lang === 'EN') setLang('RU')
      else setLang('EN')
  }
  
  return (
    <StyledLanguage className="langSwitch">
      <FormGroup>
        <FormControlLabel
          control={
            <LangSwitch
              checked={lang === 'EN' ? true : false}
              onChange={handleChange}
              name="langSwitch"
            />
          }
          label={lang}
        />
      </FormGroup>
    </StyledLanguage>
  );
}
