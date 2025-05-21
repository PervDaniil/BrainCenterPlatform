import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PieChartComponent } from "./pie-chart";
import SkillInsightCard from "./skill-insights";
import { TabsContent } from "@/components/ui/tabs";
import { RadarChartComponent } from "./radar-chart";
import { Textarea } from "@/components/ui/textarea";
import { HorizontalBarChart } from "./horiz-bar-chart";
import { calculateProficiencyLevel } from "@/utils/caclulateProficiency";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, CheckCircle, TrendingUp, Clock, AlertTriangleIcon } from "lucide-react";


const suggestions = [
  "Career Advice",
  "Productivity",
  "Wellness",
  "Tech Trends",
  "Relationships",
  "Personal Finance",
  "Learning Strategies"
];

type AnalyticsTabProps = {
  userData: any;
};


export default function AnalyticsTab ({ userData }: AnalyticsTabProps) {
  const passedQuizzes = userData?.["passed-quizes"] || [];
  const proficiency = calculateProficiencyLevel(passedQuizzes);

  const summaryCards = [
    {
      title: 'Progress Level',
      icon: <LineChart className="text-blue-500 w-5 h-5" />,
      progress: '84%',
      description: 'Overall course completion',
    },
    {
      title: 'Passed Quizzes',
      icon: <CheckCircle className="text-green-500 w-5 h-5" />,
      progress: passedQuizzes.length,
      description: 'Quizzes successfully passed',
    },
    {
      title: 'Proficiency Level',
      icon: <TrendingUp className="text-purple-500 w-5 h-5" />,
      progress: `${proficiency}%`,
      description: 'Skill improvement rate',
    },
    {
      title: 'Time Spent',
      icon: <Clock className="text-orange-500 w-5 h-5" />,
      progress: '9h',
      description: 'Total learning time',
    },
  ];

  const skills = [
    {
      aspect: 'Grammar',
      description: 'You’ve mastered grammar fundamentals.',
      icon: <CheckCircle className="text-green-500 w-6 h-6" />,
    },
    {
      aspect: 'Speaking',
      description: 'Speaking fluency needs improvement.',
      icon: <AlertTriangleIcon className="text-yellow-500 w-6 h-6" />,
    },
    {
      aspect: 'Reading',
      description: 'Reading comprehension is strong.',
      icon: <CheckCircle className="text-green-500 w-5 h-5" />,
    },
    {
      aspect: 'Listening',
      description: 'Listening skills require attention.',
      icon: <AlertTriangleIcon className="text-red-500 w-6 h-6" />,
    },
  ];

  return (
    <TabsContent value="analytics">
      <div className="grid lg:grid-cols-4 gap-6">
        {summaryCards.map((card, index) => (
          <Card key={index}>
            <CardHeader className="flex items-center gap-2 pb-2">
              <CardTitle className="w-full text-sm flex items-center justify-between">
                {card.title}
                {card.icon}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-2xl font-semibold text-foreground">
                {card.progress}
                <li className="text-xs font-normal pt-2 text-muted-foreground">
                  <li>{card.description}</li>
                </li>
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="p-4 grid lg:grid-cols-3 pb-16 mt-4 gap-x-12">
        <HorizontalBarChart />
        <RadarChartComponent />
        <PieChartComponent />
      </Card>

        <Card className="mt-4">
          <div className="p-4 lg:py-8 lg:px-12 grid lg:grid-cols-2 gap-y-6 gap-x-8">
            {skills.map((card, index) => (
              <SkillInsightCard key={index} aspect={card.aspect} description={card.description} icon={card.icon} />
            ))}
          </div>
        </Card>

      <Card className="mt-6 p-4 lg:py-8 lg:px-12 grid lg:grid-cols-2 gap-6">
        <div className="flex flex-col space-y-4">
          <h2 className="text-lg font-semibold">Ask AI for Help</h2>
          <Textarea placeholder="Describe your situation or ask a question..." className="min-h-[150px]" />
          <Button className="w-full">Submit</Button>
        </div>
            
        <div className="flex flex-col space-y-4">
          <h2 className="text-lg font-semibold">Select Topics of Interest</h2>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((topic) => (
              <Badge
                key={topic}
                variant="outline">
                {topic}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </TabsContent>
  );
};