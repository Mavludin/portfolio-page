import { useEffect, useState } from "react";
import { navLinks } from "../projectData";
import { navBack, navForward } from "../projectFunctions";

export const useWheel = (nav) => {

  const [allowWheel, setAllowWheel] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(min-width: 836px)").matches) {
        setAllowWheel(true);
      } else {
        setAllowWheel(false);
      }
    }
    handleResize()
    
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [])

  useEffect(() => {
    const handleWheel = (e) => {
      if (allowWheel) {
        setAllowWheel(false);
        setTimeout(() => setAllowWheel(true), 1000)
        if (e.deltaY > 0) {
          navForward(navLinks, nav);
        } else {
          navBack(navLinks, nav);
        }
      } else return false;

    }
    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [allowWheel, nav])

  return allowWheel

}
