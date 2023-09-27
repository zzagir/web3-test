import close from "../../assets/close.svg";
import styles from "./Line.module.scss";

const Line = () => {
  return (
    <div className={styles.line}>
      <span>This project is beta. DYOR</span>
      <img src={close} alt="close" className={styles.close} />
    </div>
  );
};

export default Line;
