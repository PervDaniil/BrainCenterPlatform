"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis } from "recharts"
import { DAYS_OF_THE_WEEK } from "@/constants/weekdays"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function HorizontalBarChart() {
  const todayWeekIndex = new Date().getDay();

  const chartData = [
    { month: DAYS_OF_THE_WEEK[todayWeekIndex], desktop: 186 },
    { month: DAYS_OF_THE_WEEK[todayWeekIndex - 1], desktop: 305 },
    { month: DAYS_OF_THE_WEEK[todayWeekIndex - 2], desktop: 237 },
    { month: DAYS_OF_THE_WEEK[todayWeekIndex - 3], desktop: 73 },
    { month: DAYS_OF_THE_WEEK[todayWeekIndex - 4], desktop: 209 },
    { month: DAYS_OF_THE_WEEK[todayWeekIndex - 5], desktop: 214 },
  ]
  
  return (
    <Card className="border-none">
      <CardHeader>
        <CardTitle>Week activity range</CardTitle>
        <CardDescription>Current week activity</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: -20,
            }}
          >
            <XAxis type="number" dataKey="desktop" hide />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Elevates for 72%  <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Reflects activity diring the week
        </div>
      </CardFooter>
    </Card>
  )
}
