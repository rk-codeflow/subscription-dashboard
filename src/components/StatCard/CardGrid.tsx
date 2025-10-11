import { FiUserCheck } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";
import Card from "./Card";
import styles from "./Card.module.scss";
import userSubscriptions from "../../data/subscriptions.json";
import usersData from "../../data/users.json";

// get active subscriptions
const activeSubscriptions = userSubscriptions.filter((sub) => {
  const date = new Date(sub.expires_on);
  return date > new Date();
}).length;

// get expired subscriptions
const expiredSubscriptions = userSubscriptions.filter((sub) => {
  const date = new Date(sub.expires_on);
  return date < new Date();
}).length;

// get active users
const activeUsers = usersData.filter((user) => user.active === "1").length;

const CardGrid = () => {
  return (
    <div className={styles.cardWrapper}>
      <Card
        title="Total subscribers"
        value={userSubscriptions.length}
        icon={<FiUserCheck />}
        color="#2463eb"
        bgColor="#e1e8f9"
      />

      <Card
        title="Active subscriptions"
        value={activeSubscriptions}
        icon={<IoMdCheckmarkCircleOutline />}
        color="#21C55D"
        bgColor="#ECF9EF"
      />

      <Card
        title="Expired subscriptions"
        value={expiredSubscriptions}
        icon={<RxCrossCircled />}
        color="#F36160"
        bgColor="#FFEDEC"
      />

      <Card
        title="Active users"
        value={activeUsers}
        icon={<FiUserCheck />}
        color="#AF57DC"
        bgColor="#dbbdeaff"
      />
    </div>
  );
};

export default CardGrid;
