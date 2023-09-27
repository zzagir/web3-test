import styles from "./CryptoInfo.module.scss";
import { crypto, tarif } from "./data";
const CryptoInfo = () => {
  return (
    <div className={styles.crypto}>
      <div className="container">
        <div className={styles.crypMain}>
          {crypto.map((cryp) => (
            <div key={cryp.name} className={styles.card} id={cryp.id}>
              <div className={styles.crypName}>
                <img
                  src={cryp.logo}
                  alt=""
                  width={32}
                  height={32}
                  style={{ borderRadius: "80px" }}
                />
                <span>{cryp.name}</span>
              </div>
              <div className={styles.crypDesc}>{cryp.description}</div>
              <div className={styles.crypAir}>
                <button>Read more</button>
                <div className={styles.airBox}>
                  <span>On artificial AI:</span>
                  <div className={styles.air}>
                    <div className={styles.airLeft}>
                      <span>expected airdrop</span>
                      <span>{cryp.airdrop}</span>
                    </div>
                    <div className={styles.airRight}>
                      <span>probability</span>
                      <span>{cryp.probability}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.tarif}>
                <div className={styles.tarifHead}>
                  <span>Tariff</span>
                  <span>Cost, $</span>
                  <span></span>
                </div>
                {tarif.map((tar) => (
                  <div key={tar.cost} className={styles.tar}>
                    <span>{tar.product}</span>
                    <span>{tar.cost}</span>
                    <span>Detail</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoInfo;
