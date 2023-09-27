import styles from "./OpenInfoBlock.module.scss";
import infoBlock from "../../assets/infoblock.svg";

const OpenInfoBlock = () => {
  return (
    <div className={styles.info}>
      <div className="container">
        <div className={styles.infoBlock}>
          <div className={styles.left}>
            <div className={styles.button}>
              <div>
                <img src={infoBlock} alt="info button" width={18} height={18} />
              </div>
              <span>Show</span>
            </div>
            <span>AirdropHunter’s NEWS</span>
          </div>
          <div className={styles.right}>
            Starknet is a decentralized Validity-Rollup Validity-Rollup
            decentralized Rollup Rollup Rollup...
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenInfoBlock;
