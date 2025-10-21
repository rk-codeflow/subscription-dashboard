import { useEffect, useState } from "react";
import Header from "./components/DashboardHeader/Header";
import CardGrid from "./components/StatCard/CardGrid";
import type { SubscriptionProps, User } from "./interface/interface";
import Chart from "./components/Chart/Chart";
import UserTable from "./components/UserTable/UserTable";

function App() {
  const [subLoading, setSubLoading] = useState(true);
  const [subscription, setSubscription] = useState<SubscriptionProps[]>([]);
  const [userLoading, setUserLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);

  // Fetch subscriptions
  const fetchSubscriptions = async () => {
    try {
      const res = await fetch("/data/subscriptions.json");
      const data = await res.json();
      setSubscription(data);
    } catch (error) {
      console.log("Error loading data", error);
    } finally {
      setSubLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscriptions();
  }, []);

  // Fetch users
  const fetchUsers = async () => {
    try {
      const res = await fetch("/data/users.json");
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.log("Error loading data", error);
    } finally {
      setUserLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const loading = subLoading || userLoading;

  return (
    <>
      <Header />
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <CardGrid subscriptions={subscription} users={users} />
      )}
      <Chart subscriptions={subscription} users={users} />
      <UserTable subscriptions={subscription} users={users} />
    </>
  );
}

export default App;
