import React from "react";
import { FormGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import styles from "./Language.modue.css";

const LangSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 41,
  height: 25,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 1,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16.5px)",
      color: '#ed6464',
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#1f1f1f",
        opacity: 1,
        border: "1px solid #ed6464",
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 23,
    height: 23
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#ed6464" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export const Language = () => {
  const [lang, setLang] = React.useState("EN");

  const handleChange = () => {
    if (lang === "EN") setLang("RU");
    else setLang("EN");
  };

  return (
    <div className={styles.langSwitch}>
      <FormGroup>
        <FormControlLabel
          control={
            <LangSwitch
              name="langSwitch"
              onChange={handleChange}
              checked={lang === "EN" ? true : false}
              sx={{ m: 1 }}
            />
          }
          label={lang}
        />
      </FormGroup>
    </div>
  );
};
