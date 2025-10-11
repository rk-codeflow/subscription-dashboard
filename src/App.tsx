import { useEffect, useState } from "react";
import Header from "./components/DashboardHeader/Header";
import CardGrid from "./components/StatCard/CardGrid";
import type { SubscriptionProps } from "./interface/interface";

function App() {
  const [loading, setLoading] = useState(true);
  const [subscription, setSubscription] = useState<SubscriptionProps[]>([]);

  const fetchSubscriptions = async () => {
    try {
      const res = await fetch("/data/subscriptions.json");
      const data = await res.json();
      console.log({ data });
      setSubscription(data);
    } catch (error) {
      console.log("Error loading data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscriptions();
  }, []);

  return (
    <>
      <Header />
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <CardGrid subscriptions={subscription} />
      )}
    </>
  );
}

export default App;
