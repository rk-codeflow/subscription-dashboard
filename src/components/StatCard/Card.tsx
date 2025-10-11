import type { CardProps } from "../../interface/interface";
import cardStyles from "./Card.module.scss";

const Card = ({ title, value, icon, color, bgColor }: CardProps) => {
  return (
    <div className={cardStyles.card}>
      <div>
        <h3>{value}</h3>
        <p>{title}</p>
      </div>
      <div
        style={{ background: bgColor, color: color }}
        className={cardStyles.icon}
      >
        {icon}
      </div>
    </div>
  );
};

export default Card;
