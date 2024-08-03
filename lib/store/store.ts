import { create } from "zustand";
import { MobileSidebarState } from "@/typings";
import { SelectedAmountState, SelectedMethodState } from "@/typings/form";

export const SidebarToggle = create<MobileSidebarState>((set) => ({
  sidebarOpen: null,
  setSidebarOpen: (sidebarOpen) => set(() => ({ sidebarOpen })),
}));

// Global State for Spend.tsx Component
export const SelectedAmount = create<SelectedAmountState>((set) => ({
  amount: "",
  setAmount: (amount) => set(() => ({ amount })),
}));

export const SelectedMethod = create<SelectedMethodState>((set) => ({
  selectedValue: "",
  setSelectedValue: (selectedValue) => set(() => ({ selectedValue })),
}));
