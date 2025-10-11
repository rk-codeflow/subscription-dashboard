import cardStyles from "./Card.module.scss";
interface CardProps {
  value: number | string;
  title: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}
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
