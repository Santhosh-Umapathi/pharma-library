"use client";
import {
  FeatureTab,
  LayoutsTab,
  KpiTab,
  StoryBoardsTab,
} from "@/components/Tabs";
import { useController } from "./controller";
import { WorkInProgress } from "@/components/WorkInProgress";
import { TProps, TTabComponents } from "./types";

// Available tab components
const TAB_COMPONENTS: TTabComponents = {
  featured: <FeatureTab />,
  kpi: <KpiTab />,
  layouts: <LayoutsTab />,
  storyboards: <StoryBoardsTab />,
};

// Render the component based on the selected tab
export const TabComponent = ({ featured, trending }: TProps) => {
  const { selectedTab } = useController({
    featured,
    trending,
  });

  // Guard clause to ensure selectedTab is valid
  if (!TAB_COMPONENTS[selectedTab]) {
    return <WorkInProgress />; // or a fallback component
  }

  return TAB_COMPONENTS[selectedTab];
};
