import { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { useGetSkillInsights } from "@/hooks/useGetSkillInsights";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


type SkillInsightCardProps = {
  aspect: string;
  description: string;
  icon: ReactNode;
};

const SkillInsightCard = ({ aspect, description, icon }: SkillInsightCardProps) => {
  const { suggestions, loading, error } = useGetSkillInsights(aspect);

  return (
    <Card className="transition-all hover:shadow-lg">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center gap-x-4">
            {icon}
            <span>{aspect}</span>
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className="text-muted-foreground font-normal text-sm">
        {description}

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Show more</AccordionTrigger>
            <AccordionContent>
              Additional insights and resources related to {aspect}.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2">
        {loading ? (
          <Badge variant="outline">Loading...</Badge>
        ) : error ? (
          <Badge variant="destructive">Error loading insights</Badge>
        ) : suggestions && suggestions.length > 0 ? (
          suggestions.map((item, index) => (
            <Badge key={index} variant="outline" className="font-light">
              {item.suggestion}
            </Badge>
          ))
        ) : (
          <Badge variant="outline" className="font-light">
            No insights available
          </Badge>
        )}
      </CardFooter>
    </Card>
  );
};

export default SkillInsightCard;
