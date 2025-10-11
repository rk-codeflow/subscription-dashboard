export interface SubscriptionProps {
  id: number;
  user_id: string;
  package: string;
  expires_on: string;
}

export interface CardGridProps {
  subscriptions: SubscriptionProps[];
}

export interface CardProps {
  value: number | string;
  title: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}
