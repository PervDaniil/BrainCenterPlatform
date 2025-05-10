import {
    Clock,
    BookMarked,
    GraduationCap
} from "lucide-react";
import { Button } from '@/components/ui/button';
import { enrolledCourses } from "@/assets/data/dashboard";
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';


export default function CoursesTab() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">My Courses</h2>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                        Filter
                    </Button>
                    <Button variant="outline" size="sm">
                        Sort
                    </Button>
                </div>
            </div>
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
                                <div className="flex gap-2">
                                    <Button variant="default" className="w-full">
                                        Continue
                                    </Button>
                                    <Button variant="outline" size="icon">
                                        <BookMarked className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Browse More Courses</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Java Development",
                            category: "Programming",
                            level: "Intermediate",
                            duration: "14 weeks",
                        },
                        {
                            title: "Professional PowerPoint",
                            category: "Office",
                            level: "All Levels",
                            duration: "5 weeks",
                        },
                        {
                            title: "Conversational English",
                            category: "Language",
                            level: "Intermediate",
                            duration: "12 weeks",
                        },
                    ].map((course, idx) => (
                        <Card key={idx}>
                            <CardHeader>
                                <CardTitle>{course.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex justify-between text-sm text-muted-foreground mb-4">
                                        <div className="flex items-center">
                                            <GraduationCap className="mr-2 h-4 w-4" />
                                            {course.level}
                                        </div>
                                        <div className="flex items-center">
                                            <Clock className="mr-2 h-4 w-4" />
                                            {course.duration}
                                        </div>
                                    </div>
                                    <Button variant="outline" className="w-full">
                                        View Details
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}