import styles from "./Header.module.scss";
import { FiUserCheck } from "react-icons/fi";
const Header = () => {
  return (
    <>
      <div className={styles.headerWrapper}>
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
    </>
  );
};

export default Header;
