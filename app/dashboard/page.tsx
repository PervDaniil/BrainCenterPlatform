"use client";
import { useUser } from "@/hooks/useUser";
import DashboardTabs from "@/components/dashboard/tabs";
import ProtectedRoute from "@/components/protected-route";
import CoursesTab2 from "@/components/dashboard/courses-tab2";
import OverviewTab from "@/components/dashboard/overview-tab";
import AnalyticsTab from "@/components/dashboard/analytics-tab";
import WelcomeSection from "@/components/dashboard/welcome-section";
import { useDashboardUserData } from "@/hooks/useDashboardUserData";


export default function Dashboard() {
    const user = useUser();
    const userData = useDashboardUserData({ uid: user?.uid });

    return (
        <ProtectedRoute>
            <div className="min-h-screen pb-16 pt-24">
                <WelcomeSection user={user} />

                <DashboardTabs>
                    <OverviewTab userData={userData.data} />
                    <CoursesTab2 />
                    <AnalyticsTab userData={userData.data}/>
                </DashboardTabs>
            </div>
        </ProtectedRoute>
    );

}