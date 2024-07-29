// Typings for the sidebar for mobile devices in Dashboard
export interface MobileSidebarState {
  sidebarOpen: boolean | null;
  setSidebarOpen: (mobile: MobileSidebarState["sidebarOpen"]) => void;
}
