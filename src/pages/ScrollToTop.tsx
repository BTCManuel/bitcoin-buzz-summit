import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scrollt nach ganz oben, wenn sich der Pfad ändert
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
