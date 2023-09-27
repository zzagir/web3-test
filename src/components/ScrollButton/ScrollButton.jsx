/* eslint-disable no-unused-vars */
import { useState } from "react";
import up from "../../assets/infoBlock.svg";
import styles from "./ScrollButton.module.scss";
import { useEffect } from "react";
import cn from "clsx";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scroll = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <button
      className={cn(styles.scroll, { [styles.display]: isVisible })}
      onClick={scroll}
    >
      <img src={up} alt="scroll button" width={26} height={26} />
    </button>
  );
};

export default ScrollButton;
