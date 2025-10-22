import { useEffect } from "react";
import Header from "./components/DashboardHeader/Header";
import CardGrid from "./components/StatCard/CardGrid";
import Chart from "./components/Chart/Chart";
import UserTable from "./components/UserTable/UserTable";
import { useAppStore } from "./store/useAppStore";

function App() {
  const {
    users,
    subscriptions,
    subLoading,
    userLoading,
    fetchUsers,
    fetchSubscriptions,
  } = useAppStore();

  const loading = subLoading || userLoading;

  useEffect(() => {
    fetchUsers();
    fetchSubscriptions();
  }, [users, subscriptions]);

  return (
    <>
      <Header />
      {loading ? <div className="loading">Loading...</div> : <CardGrid />}
      <Chart />
      <UserTable />
    </>
  );
}

export default App;
