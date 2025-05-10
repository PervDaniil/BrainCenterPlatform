"use client";
import { useState } from "react";
import { Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { enrolledCourses } from "@/assets/data/dashboard";
import CoursesTab from "@/components/dashboard/courses-tab";
import CircleChart from "@/components/dashboard/circle-chart";
import LineGradientChart from "@/components/dashboard/line-chart";
import AssignmentsTab from "@/components/dashboard/assignments-tab";
import CardsStatistics from "@/components/dashboard/cards-statistics";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";



export default function Dashboard() {
    const [selectedTab, setSelectedTab] = useState("overview");

    return (
        <div className="min-h-screen pb-16 pt-24">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">Welcome back, Daniil!</h1>
                    <p className="text-muted-foreground">
                        Track your progress, manage your courses, and continue your learning journey.
                    </p>
                </motion.div>
            </div>

            <Tabs defaultValue="overview" className="space-y-8 px-4 md:px-12 lg:px-20">
                <TabsList className="grid grid-cols-3 md:grid-cols-6 max-w-[600px]">
                    <TabsTrigger value="overview" onClick={() => setSelectedTab("overview")}>Overview</TabsTrigger>
                    <TabsTrigger value="courses" onClick={() => setSelectedTab("courses")}>Courses</TabsTrigger>
                    <TabsTrigger value="assignments" onClick={() => setSelectedTab("assignments")}>Assignments</TabsTrigger>
                    <TabsTrigger value="calendar" onClick={() => setSelectedTab("calendar")}>Calendar</TabsTrigger>
                    <TabsTrigger value="resources" onClick={() => setSelectedTab("resources")}>Resources</TabsTrigger>
                    <TabsTrigger value="settings" onClick={() => setSelectedTab("settings")}>Settings</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-8">
                    <CardsStatistics />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="md:col-span-2">
                            <CardHeader>
                                <CardTitle>Learning Progress</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="h-[300px]">
                                    <LineGradientChart />
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Time Distribution</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="h-[300px] flex items-center justify-center">
                                    <CircleChart />
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <h2 className="text-2xl font-bold mt-8">Your Courses</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {enrolledCourses.map((course) => (
                            <Card key={course.id}>
                                <CardHeader>
                                    <CardTitle>{course.title}</CardTitle>
                                    <p className="text-sm text-muted-foreground">
                                        Instructor: {course.instructor}
                                    </p>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-sm font-medium">Progress</span>
                                                <span className="text-sm">{course.progress}%</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center text-sm">
                                            <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                                            <span>Next class: {course.nextClass}</span>
                                        </div>
                                        <Button variant="outline" className="w-full">
                                            Continue Learning
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="courses">
                    <CoursesTab />
                </TabsContent>

                <TabsContent value="assignments">
                    <AssignmentsTab />
                </TabsContent>

                <TabsContent value="calendar">
                    <Card>
                        <CardHeader>
                            <CardTitle>Calendar view coming soon</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>This tab will display a calendar with scheduled classes, assignment due dates, and other important events.</p>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="resources">
                    <Card>
                        <CardHeader>
                            <CardTitle>Resources view coming soon</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>This tab will provide access to downloadable materials, recommended readings, and additional learning resources.</p>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="settings">
                    <Card>
                        <CardHeader>
                            <CardTitle>Settings view coming soon</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>This tab will allow you to update your profile information, notification preferences, and account settings.</p>
                        </CardContent>
                    </Card>
                </TabsContent>

            </Tabs>
        </div>
    )
}