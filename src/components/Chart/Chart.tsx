import type { CardGridProps } from "../../interface/interface";
import styles from "./Chart.module.scss";
import Country from "./Country/Country";
import PlanDistribution from "./PlanDistribution/PlanDistribution";
const Chart = ({ subscriptions, users }: CardGridProps) => {
  return (
    <div className={styles.chartWrapper}>
      <PlanDistribution subData={subscriptions} />
      <Country users={users} />
    </div>
  );
};

export default Chart;
