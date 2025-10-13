import type { PlanDistProps } from "../../../interface/interface";
import styles from "../Chart.module.scss";

const PlanDistribution = ({ subData }: PlanDistProps) => {
  const subsData = subData.reduce((acc, sub) => {
    const plan = sub.package;
    acc[plan] = (acc[plan] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const chartData = Object.keys(subsData).map((plan) => ({
    title: plan,
    value: subsData[plan],
  }));

  return (
    <div className={styles.chart}>
      <h3>Plan Distribution</h3>
      {/* <GraphWithText /> */}

      <div className={styles.chartValue}>
        {chartData.map((data) => {
          const val = chartData.map((d) => d.value);
          const maxValue = Math.max(...val);
          const width = (data.value / maxValue) * 100;

          // background colors
          const bgColor =
            data.title === "Plan 1"
              ? "#2463EB"
              : data.title === "Plan 2"
              ? "#F59E0B"
              : data.title === "Plan3"
              ? "#34D399"
              : data.title === "Plan 6"
              ? "#EC4899"
              : data.title === "Plan 12"
              ? "#F43F5E"
              : "#ffafcc";
          return (
            <div>
              <div className={styles.flex} key={data.title}>
                <p>{data.title}</p>
                <p>{data.value}</p>
              </div>
              <div className={styles.barWrapper}>
                <div
                  className={styles.bar}
                  style={{ width: `${width}%`, backgroundColor: bgColor }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlanDistribution;
