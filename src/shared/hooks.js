import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { navLinks } from "./projectData";
import { navigate } from "./projectFunctions";

export const useWheel = () => {
  const [allowWheel, setAllowWheel] = useState(true);

  const nav = {
    history: useHistory(),
    location: useLocation(),
  };

  const handleWheel = () => {
    const handleResize = () => {
      if (window.matchMedia("(min-width: 836px)").matches) {
        setAllowWheel(true);
      } else {
        setAllowWheel(false);
      }
    };

    handleResize()

    window.addEventListener("resize", handleResize);

    const handleWheel = (e) => {
      if (allowWheel) {
        setAllowWheel(false);
        setTimeout(() => setAllowWheel(true), 1000)
        if (e.deltaY > 0) {
          navigate(navLinks, nav, "next");
        } else {
          navigate(navLinks, nav, "prev");
        }
      } else return false;
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("wheel", handleWheel);
    };
  }

  useEffect(handleWheel, [handleWheel]);

  return allowWheel

}
