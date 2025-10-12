export interface SubscriptionProps {
  id: number;
  user_id: string;
  package: string;
  expires_on: string;
}

export interface User {
  id: number;
  first_name: string;
  middle_name?: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
  active: string;
  address: string;
  country: string;
  join_date: string;
}

export interface CardGridProps {
  subscriptions: SubscriptionProps[];
  users: User[];
}

export interface CardProps {
  value: number | string;
  title: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}
