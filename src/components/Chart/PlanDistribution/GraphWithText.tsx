import styles from "../Chart.module.scss";

const GraphWithText = () => {
  return (
    <>
      <div className={styles.flex}>
        <p>Plan title</p>
        <p>Value</p>
      </div>
      <div className={styles.barWrapper}>
        <div className={styles.bar}></div>
      </div>
    </>
  );
};

export default GraphWithText;
