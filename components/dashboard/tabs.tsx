"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReactNode, useState } from "react";

type DashboardTabsProps = {
  children: ReactNode;
};

const DashboardTabs = ({ children }: DashboardTabsProps) => {
  const [selectedTab, setSelectedTab] = useState("overview");

  return (
    <Tabs defaultValue="overview" className="space-y-8 px-4 md:px-12 lg:px-20" value={selectedTab}>
      <TabsList className="overflow-auto grid grid-cols-3 md:grid md:grid-cols-6 max-w-[600px]">
        <TabsTrigger value="overview" onClick={() => setSelectedTab("overview")}>Overview</TabsTrigger>
        <TabsTrigger value="courses" onClick={() => setSelectedTab("courses")}>Courses</TabsTrigger>
        <TabsTrigger value="assignments" onClick={() => setSelectedTab("assignments")}>Assignments</TabsTrigger>
        <TabsTrigger value="calendar" onClick={() => setSelectedTab("calendar")}>Calendar</TabsTrigger>
        <TabsTrigger value="analytics" onClick={() => setSelectedTab("analytics")}>Analytics</TabsTrigger>
        <TabsTrigger value="settings" onClick={() => setSelectedTab("settings")}>Settings</TabsTrigger>
      </TabsList>

      {children}
    </Tabs>
  );
};

export default DashboardTabs;
