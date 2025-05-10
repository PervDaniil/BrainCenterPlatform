import { BookOpen } from "lucide-react";
import { statisticsCards } from "@/assets/data/dashboard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


export default function CardsStatistics() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statisticsCards.map((card, index) => (
                <Card key={index}>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{card.completed}</div>
                        <p className="text-xs text-muted-foreground">
                            {card.progress}
                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}