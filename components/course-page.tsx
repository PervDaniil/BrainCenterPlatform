"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CoursePage({ params }: { params: { course_name: string } }) {
    const { course_name } = params;

    return (
        <div className="mt-16 p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 capitalize">Course: {course_name.replace(/-/g, ' ')}</h1>

            <Tabs defaultValue="overview" className="w-full">
                <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="lessons">Lessons</TabsTrigger>
                    <TabsTrigger value="resources">Resources</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                    <Card>
                        <CardHeader>
                            <CardTitle>What you'll learn</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>This course will guide you through the fundamentals and advanced concepts of {course_name}.</p>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="lessons">
                    <Card>
                        <CardHeader>
                            <CardTitle>Lesson 1: Introduction</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Get started by understanding the basics of {course_name}.</p>
                        </CardContent>
                    </Card>

                    <Card className="mt-4">
                        <CardHeader>
                            <CardTitle>Lesson 2: Deep Dive</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Dive deeper into advanced techniques and real-world applications.</p>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="resources">
                    <Card>
                        <CardHeader>
                            <CardTitle>Downloadable Materials</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside">
                                <li>PDF Notes</li>
                                <li>Code Examples</li>
                                <li>Cheat Sheets</li>
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
