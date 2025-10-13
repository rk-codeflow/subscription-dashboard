import type { CardGridProps } from "../../interface/interface";
import styles from "./Chart.module.scss";
import PlanDistribution from "./PlanDistribution/PlanDistribution";
const Chart = ({ subscriptions, users }: CardGridProps) => {
  return (
    <div className={styles.chartWrapper}>
      <PlanDistribution subData={subscriptions} />
      <div>Country</div>
    </div>
  );
};

export default Chart;
