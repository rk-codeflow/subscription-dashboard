import { useEffect, useState } from "react";
import Header from "./components/DashboardHeader/Header";
import CardGrid from "./components/StatCard/CardGrid";
import type { SubscriptionProps, User } from "./interface/interface";
import Chart from "./components/Chart/Chart";
import UserTable from "./components/UserTable/UserTable";
import { useAppStore } from "./store/useAppStore";

function App() {
  // const [subLoading, setSubLoading] = useState(true);
  // const [subscription, setSubscription] = useState<SubscriptionProps[]>([]);
  // const [userLoading, setUserLoading] = useState(true);
  // const [users, setUsers] = useState<User[]>([]);

  // Extract everything from store
  const {
    users,
    subscriptions,
    subLoading,
    userLoading,
    fetchUsers,
    fetchSubscriptions,
  } = useAppStore();

  // Fetch subscriptions
  // const fetchSubscriptions = async () => {
  //   try {
  //     const res = await fetch("/data/subscriptions.json");
  //     const data = await res.json();
  //     setSubscription(data);
  //   } catch (error) {
  //     console.log("Error loading data", error);
  //   } finally {
  //     setSubLoading(false);
  //   }
  // };

  useEffect(() => {
    fetchSubscriptions();
  }, [fetchSubscriptions]);

  // Fetch users
  // const fetchUsers = async () => {
  //   try {
  //     const res = await fetch("/data/users.json");
  //     const data = await res.json();
  //     setUsers(data);
  //   } catch (error) {
  //     console.log("Error loading data", error);
  //   } finally {
  //     setUserLoading(false);
  //   }
  // };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const loading = subLoading || userLoading;

  return (
    <>
      <Header />
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <CardGrid subscriptions={subscriptions} users={users} />
      )}
      <Chart subscriptions={subscriptions} users={users} />
      {/* <UserTable subscriptions={subscriptions} users={users} /> */}
    </>
  );
}

export default App;
