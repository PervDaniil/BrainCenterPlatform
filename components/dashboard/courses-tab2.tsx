import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";
import { enrolledCourses } from "@/assets/data/dashboard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


export default function CoursesTab2() {
  return (
    <TabsContent value="courses">
      <h2 className="text-2xl font-bold mb-4">Your Enrolled Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {enrolledCourses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
              <p className="text-sm text-muted-foreground">
                Instructor: {course.instructor}
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span>Progress</span>
                <span>{course.progress}%</span>
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
