"use client"
import { MONTHS } from "@/constants/months";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";


export default function LineGradientChart() {
    const currentMonthIndex = new Date().getMonth();

    const getWrappedMonth = (index: number) => {
        return MONTHS[(index + 12) % 12];
    }

    const chartData = [
        { month: getWrappedMonth(currentMonthIndex - 5), desktop: 186, mobile: 80 },
        { month: getWrappedMonth(currentMonthIndex - 4), desktop: 305, mobile: 200 },
        { month: getWrappedMonth(currentMonthIndex - 3), desktop: 237, mobile: 120 },
        { month: getWrappedMonth(currentMonthIndex - 2), desktop: 73, mobile: 190 },
        { month: getWrappedMonth(currentMonthIndex - 1), desktop: 209, mobile: 130 },
        { month: getWrappedMonth(currentMonthIndex),     desktop: 214, mobile: 140 },
    ];

    const chartConfig = {
        desktop: {
            label: "Tasks",
            color: "hsl(var(--chart-1))",
        },
        mobile: {
            label: "Correct",
            color: "hsl(var(--chart-2))",
        },
    } satisfies ChartConfig;

    return (
        <ChartContainer config={chartConfig} className="h-full w-full">
            <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                    left: 12,
                    right: 12,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <defs>
                    <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                        <stop
                            offset="5%"
                            stopColor="var(--color-desktop)"
                            stopOpacity={0.8}
                        />
                        <stop
                            offset="95%"
                            stopColor="var(--color-desktop)"
                            stopOpacity={0.1}
                        />
                    </linearGradient>
                    <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                        <stop
                            offset="5%"
                            stopColor="var(--color-mobile)"
                            stopOpacity={0.8}
                        />
                        <stop
                            offset="95%"
                            stopColor="var(--color-mobile)"
                            stopOpacity={0.1}
                        />
                    </linearGradient>
                </defs>
                <Area
                    dataKey="mobile"
                    type="natural"
                    fill="url(#fillMobile)"
                    fillOpacity={0.4}
                    stroke="var(--color-mobile)"
                    stackId="a"
                />
                <Area
                    dataKey="desktop"
                    type="natural"
                    fill="url(#fillDesktop)"
                    fillOpacity={0.4}
                    stroke="var(--color-desktop)"
                    stackId="a"
                />
            </AreaChart>
        </ChartContainer>
    )
}
