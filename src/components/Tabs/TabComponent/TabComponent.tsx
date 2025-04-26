"use client";
import {
  FeatureTab,
  LayoutsTab,
  KpiTab,
  StoryBoardsTab,
} from "@/components/Tabs";
import { useController } from "./controller";
import { TSelectedTab } from "@/store/library/types";
import { WorkInProgress } from "@/components/WorkInProgress";

// Available tab components
const TAB_COMPONENTS: { [key in TSelectedTab]: React.ReactNode } = {
  featured: <FeatureTab />,
  kpi: <KpiTab />,
  layouts: <LayoutsTab />,
  storyboards: <StoryBoardsTab />,
};

// Render the component based on the selected tab
export const TabComponent = () => {
  const { selectedTab } = useController();

  // Guard clause to ensure selectedTab is valid
  if (!TAB_COMPONENTS[selectedTab]) {
    return <WorkInProgress />; // or a fallback component
  }

  return TAB_COMPONENTS[selectedTab];
};
