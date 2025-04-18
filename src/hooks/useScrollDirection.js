import { useState, useEffect } from 'react';

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevScroll, setPrevScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      const direction = currentScroll > prevScroll ? "down" : "up";
      
      if (Math.abs(currentScroll - prevScroll) > 5) {
        setScrollDirection(direction);
      }
      
      setPrevScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll]);

  return scrollDirection;
};

export default useScrollDirection;