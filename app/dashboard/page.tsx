"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  Award, 
  LineChart,
  MessageSquare,
  ListChecks,
  BookMarked,
  GraduationCap
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import Footer from "@/components/landing/footer";

// Mock data for the dashboard
const enrolledCourses = [
  {
    id: 1,
    title: "Business English",
    progress: 68,
    nextClass: "Tomorrow, 4:00 PM",
    instructor: "Emma Wilson",
    color: "primary",
  },
  {
    id: 2,
    title: "Advanced Excel Mastery",
    progress: 42,
    nextClass: "Thursday, 6:30 PM",
    instructor: "Robert Chen",
    color: "chart-1",
  },
  {
    id: 3,
    title: "Python Programming Fundamentals",
    progress: 25,
    nextClass: "Saturday, 10:00 AM",
    instructor: "David Kim",
    color: "chart-2",
  },
];

const progressData = [
  { name: "Week 1", progress: 10 },
  { name: "Week 2", progress: 25 },
  { name: "Week 3", progress: 32 },
  { name: "Week 4", progress: 40 },
  { name: "Week 5", progress: 48 },
  { name: "Week 6", progress: 55 },
  { name: "Week 7", progress: 68 },
];

const timeSpentData = [
  { name: "Business English", value: 24 },
  { name: "Advanced Excel", value: 18 },
  { name: "Python Programming", value: 12 },
];

const COLORS = ["hsl(var(--primary))", "hsl(var(--chart-1))", "hsl(var(--chart-2))"];

const upcomingAssignments = [
  {
    id: 1,
    title: "Business Email Composition",
    course: "Business English",
    dueDate: "May 15, 2025",
    status: "Pending",
  },
  {
    id: 2,
    title: "Data Analysis Project",
    course: "Advanced Excel Mastery",
    dueDate: "May 18, 2025",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Python Calculator App",
    course: "Python Programming Fundamentals",
    dueDate: "May 22, 2025",
    status: "Not Started",
  },
];

const recommendedCourses = [
  {
    id: 1,
    title: "Java Development",
    description: "Build on your Python skills with this comprehensive Java course",
    level: "Intermediate",
    duration: "14 weeks",
  },
  {
    id: 2,
    title: "Professional PowerPoint",
    description: "Learn to create stunning presentations for business settings",
    level: "All Levels",
    duration: "5 weeks",
  },
];

export default function Dashboard() {
  const [selectedTab, setSelectedTab] = useState("overview");

  return (
    <div className="min-h-screen pb-16 pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">Welcome back, Alex!</h1>
          <p className="text-muted-foreground">
            Track your progress, manage your courses, and continue your learning journey.
          </p>
        </motion.div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 max-w-[600px]">
            <TabsTrigger value="overview" onClick={() => setSelectedTab("overview")}>Overview</TabsTrigger>
            <TabsTrigger value="courses" onClick={() => setSelectedTab("courses")}>Courses</TabsTrigger>
            <TabsTrigger value="assignments" onClick={() => setSelectedTab("assignments")}>Assignments</TabsTrigger>
            <TabsTrigger value="calendar" onClick={() => setSelectedTab("calendar")}>Calendar</TabsTrigger>
            <TabsTrigger value="resources" onClick={() => setSelectedTab("resources")}>Resources</TabsTrigger>
            <TabsTrigger value="settings" onClick={() => setSelectedTab("settings")}>Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Courses Enrolled</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">
                    2 in progress, 1 completed
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Completed Lessons</CardTitle>
                  <BookMarked className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24/68</div>
                  <p className="text-xs text-muted-foreground">
                    35% completion rate
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Hours Studied</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">54</div>
                  <p className="text-xs text-muted-foreground">
                    Last 30 days
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Upcoming Deadlines</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">
                    Next: May 15, 2025
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Learning Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={progressData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                      >
                        <defs>
                          <linearGradient id="colorProgress" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="progress" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorProgress)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Time Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={timeSpentData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {timeSpentData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
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
                        <Progress value={course.progress} className={`bg-${course.color}/20`} />
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

            <h2 className="text-2xl font-bold mt-8">Recommended For You</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recommendedCourses.map((course) => (
                <Card key={course.id}>
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{course.description}</p>
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
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="courses">
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
                          <Progress value={course.progress} className={`bg-${course.color}/20`} />
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
          </TabsContent>

          <TabsContent value="assignments">
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
                          <span className={`text-sm ${
                            assignment.status === "Pending" ? "text-orange-500" :
                            assignment.status === "In Progress" ? "text-blue-500" : 
                            "text-muted-foreground"
                          }`}>
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
      
      <Footer />
    </div>
  );
}