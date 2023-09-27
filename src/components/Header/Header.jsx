import styles from "./Header.module.scss";
import logo from "../../assets/logo.svg";
import icon from "../../assets/icon.svg";
import gas from "../../assets/gas.svg";
import menu from "../../assets/menu.svg";
import metamask from "../../assets/metamask.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <img src={logo} alt="logo" width={64} height={40} />
      </div>
      <div className={styles.right}>
        <button className={styles.deposit}>Deposit</button>
        <button className={styles.icon}>
          <img src={icon} alt="icon" width={16} height={16} />
        </button>
        <div className={styles.walletInfo}>
          <span className={styles.money}>850$</span>
          <span className={styles.wallet}>0xf7n...78ba</span>
          <span className={styles.balance}>
            <img src={gas} alt="gas" width={16} height={16} />
            <span>0$</span>
          </span>
          <button className={styles.metamask}>
            <img src={metamask} alt="metamask" width={26} height={26} />
          </button>
        </div>
        <button className={styles.menu}>
          <img src={menu} alt="menu" width={18} height={4} />
        </button>
      </div>
    </header>
  );
};

export default Header;
