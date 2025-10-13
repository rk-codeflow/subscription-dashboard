import styles from "../Chart.module.scss";
import type { CountryProps } from "../../../interface/interface";

const Country = ({ users }: CountryProps) => {
  const colors = [
    "#2463eb",
    "#21C55D",
    "#F36160",
    "#AF57DC",
    "#FFB020",
    "#00B8D9",
    "#FF5630",
  ];
  const activeUsers = users.filter((user) => user.active === "1");

  const countryCounts = activeUsers.reduce(
    (acc: { country: string; count: number }[], user) => {
      const existingUser = acc.find((u) => u.country === user.country);

      if (existingUser) {
        existingUser.count += 1;
      } else {
        acc.push({ country: user.country, count: 1 });
      }

      return acc;
    },
    []
  );

  const sortedCountryCounts = countryCounts
    .sort((a, b) => b.count - a.count)
    .slice(0, 7);
  return (
    <div className={styles.chart}>
      <h3>Top countries based on active users</h3>

      <div className={styles.chartValue}>
        {sortedCountryCounts.map((country, idx) => {
          return (
            <div className={styles.country} key={country.country}>
              <div className={styles.flex}>
                <div
                  className={styles.circle}
                  style={{ backgroundColor: colors[idx % colors.length] }}
                ></div>
                <p>{country.country}</p>
              </div>
              <p>{country.count}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Country;
