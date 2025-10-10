import styles from "./Header.module.scss";
import { FiUserCheck } from "react-icons/fi";
const Header = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.icon}>
            <FiUserCheck />
          </div>
          <div className={styles.content}>
            <h3>Subscription Dashboard</h3>
            <p>Subscriber data</p>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
    </>
  );
};

export default Header;
