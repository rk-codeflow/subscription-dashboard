import styles from "./Chart.module.scss";
import Country from "./Country/Country";
import PlanDistribution from "./PlanDistribution/PlanDistribution";
const Chart = () => {
  return (
    <div className={styles.chartWrapper}>
      <PlanDistribution />
      <Country />
    </div>
  );
};

export default Chart;
