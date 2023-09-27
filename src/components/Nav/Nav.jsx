import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className="container">
        <div className={styles.navMain}>
          <div>
            <div>Airdrops</div>
            <div>Stats</div>
            <div>News</div>
            <div>Referrals</div>
            <div>Nodes</div>
            <button className={styles.newButton}>New</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
