import { useState, useEffect } from "react";

export const useScroll = () => {
  const [scroll, setScroll] = useState(0);

  const listener = () => {
    setScroll(window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", () => listener);
    };
  }, []);

  return {
    scroll,
  };
};
