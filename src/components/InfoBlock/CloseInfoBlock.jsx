import styles from "./CloseInfoBlock.module.scss";

import infoBlock from "../../assets/infoblock.svg";
import rightImg from "../../assets/rightinfo.png";

const CloseInfoBlock = () => {
  return (
    <div className={styles.info}>
      <div className="container">
        <div className={styles.infoMain}>
          <div className={styles.left}>
            <div className={styles.leftMain}>
              <span>Today · 15:24 </span>
              <h2>
                Starknet is a decentralized Validity-Rollup often referred
              </h2>
              <p>
                Starknet is a decentralized Validity-Rollup (often referred to
                as ZK-Rollup). It operates as a Layer 2 network over Ethereum.
                Starknet is a decentralized Validity-Rollup Starknet is a
                decentralized Validity-Rollup (often referred to as ZK-Rollup).
                It operates as a Layer 2 network over Ethereum. Starknet is a
                decentralized Validity-Rollup
              </p>
              <div className={styles.buttons}>
                <div className={styles.button}>
                  <div>
                    <img
                      src={infoBlock}
                      alt="hide button"
                      width={18}
                      height={18}
                    />
                  </div>
                  <span>Hide</span>
                </div>
                <div className={styles.nextButton}>
                  <img
                    src={infoBlock}
                    alt="next button"
                    width={18}
                    height={18}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <img
              src={rightImg}
              alt="8000 wallets"
              width={665}
              height={400}
              className={styles.img}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloseInfoBlock;
