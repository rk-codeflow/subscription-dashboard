import { FiUserCheck } from "react-icons/fi";
import Card from "./Card";
import styles from "./Card.module.scss";
const CardGrid = () => {
  return (
    <div className={styles.cardWrapper}>
      <Card
        title="Subscribers"
        value={5000}
        icon={<FiUserCheck />}
        color="#2463eb"
        bgColor="#e1e8f9"
      />

      <Card
        title="Subscribers"
        value={5000}
        icon={<FiUserCheck />}
        color="#2463eb"
        bgColor="#e1e8f9"
      />

      <Card
        title="Subscribers"
        value={5000}
        icon={<FiUserCheck />}
        color="#2463eb"
        bgColor="#e1e8f9"
      />

      <Card
        title="Subscribers"
        value={5000}
        icon={<FiUserCheck />}
        color="#2463eb"
        bgColor="#e1e8f9"
      />
    </div>
  );
};

export default CardGrid;
