import { create } from "zustand";
import type { SubscriptionProps, User } from "../interface/interface";

interface AppState {
  users: User[];
  subscriptions: SubscriptionProps[];
  subLoading: boolean;
  userLoading: boolean;
  fetchUsers: () => Promise<void>;
  fetchSubscriptions: () => Promise<void>;
}

export const useAppStore = create<AppState>((set) => ({
  users: [],
  subscriptions: [],
  userLoading: true,
  subLoading: true,
  fetchUsers: async () => {
    try {
      const res = await fetch("/data/users.json");
      const data = await res.json();
      set({ users: data });
    } catch (error) {
      console.log("Error loading data", error);
    } finally {
      set({ userLoading: false });
    }
  },

  fetchSubscriptions: async () => {
    try {
      const res = await fetch("/data/subscriptions.json");
      const data = await res.json();
      set({ subscriptions: data });
    } catch (error) {
      console.log("Error loading data", error);
    } finally {
      set({ subLoading: false });
    }
  },
}));
