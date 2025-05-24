import { Clock } from "lucide-react";
import { Toaster } from "../ui/toaster";
import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";
import { enrolledCourses } from "@/assets/data/dashboard";
import CircleChart from "@/components/dashboard/circle-chart";
import LineGradientChart from "@/components/dashboard/line-chart";
import CardsStatistics from "@/components/dashboard/cards-statistics";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type OverviewTabProps = {
  userData: any;
};

export default function OverviewTab({ userData }: OverviewTabProps) {
  const passedQuizzes = userData?.["passed-quizes"] || [];

  return (
    <TabsContent value="overview" className="space-y-8">
      <CardsStatistics />
      <Toaster />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Learning Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-auto md:h-[260px] lg:h-[300px]">
              <LineGradientChart />
            </div>
          </CardContent>
        </Card>

        <CircleChart amount={passedQuizzes.length} />
      </div>

      <h2 className="text-2xl font-bold mt-8">Your Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {enrolledCourses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
              <p className="text-sm text-muted-foreground">Instructor: {course.instructor}</p>
            </CardHeader>
            <CardContent className="space-y-4">
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
            </CardContent>
          </Card>
        ))}
      </div>
    </TabsContent>
  );
};

