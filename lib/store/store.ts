import { create } from "zustand";
import { MobileSidebarState } from "@/typings";

export const SidebarToggle = create<MobileSidebarState>((set) => ({
  sidebarOpen: null,
  setSidebarOpen: (sidebarOpen) => set(() => ({ sidebarOpen })),
}));
