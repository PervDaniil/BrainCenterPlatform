"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { upcomingAssignments } from "@/assets/data/dashboard";


export default function AssignmentsTab() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Assignments & Quizzes</h2>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                        Filter
                    </Button>
                    <Button variant="outline" size="sm">
                        Sort
                    </Button>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Upcoming Assignments</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {upcomingAssignments.map((assignment) => (
                            <div key={assignment.id} className="flex justify-between items-center p-4 border rounded-lg">
                                <div>
                                    <h3 className="font-medium">{assignment.title}</h3>
                                    <p className="text-sm text-muted-foreground">
                                        {assignment.course} • Due: {assignment.dueDate}
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm">
                                        {assignment.status}
                                    </span>
                                    <Button variant="outline" size="sm">
                                        View
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Recent Grades</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {[
                            {
                                title: "Mid-term Business Writing",
                                course: "Business English",
                                score: "85/100",
                                date: "April 28, 2025",
                            },
                            {
                                title: "Data Visualization Quiz",
                                course: "Advanced Excel Mastery",
                                score: "92/100",
                                date: "April 22, 2025",
                            },
                        ].map((grade, idx) => (
                            <div key={idx} className="flex justify-between items-center p-4 border rounded-lg">
                                <div>
                                    <h3 className="font-medium">{grade.title}</h3>
                                    <p className="text-sm text-muted-foreground">
                                        {grade.course} • Submitted: {grade.date}
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-lg font-semibold">{grade.score}</span>
                                    <Button variant="outline" size="sm">
                                        Feedback
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Practice Quizzes</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {[
                            {
                                title: "English Grammar Review",
                                course: "Business English",
                                questions: 20,
                                time: "30 minutes",
                            },
                            {
                                title: "Excel Formulas Practice",
                                course: "Advanced Excel Mastery",
                                questions: 15,
                                time: "25 minutes",
                            },
                            {
                                title: "Python Basics Assessment",
                                course: "Python Programming Fundamentals",
                                questions: 25,
                                time: "45 minutes",
                            },
                        ].map((quiz, idx) => (
                            <div key={idx} className="flex justify-between items-center p-4 border rounded-lg">
                                <div>
                                    <h3 className="font-medium">{quiz.title}</h3>
                                    <p className="text-sm text-muted-foreground">
                                        {quiz.course} • {quiz.questions} questions • {quiz.time}
                                    </p>
                                </div>
                                <Button variant="outline" size="sm">
                                    Start Quiz
                                </Button>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}