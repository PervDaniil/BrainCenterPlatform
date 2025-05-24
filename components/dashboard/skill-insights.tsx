import { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


type SkillInsightCardProps = {
  aspect: string;
  description: string;
  icon: ReactNode;
};

const SkillInsightCard = ({ aspect, description, icon }: SkillInsightCardProps) => {
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

      <CardFooter>
        <Badge className="font-light" variant="outline">...</Badge>
      </CardFooter>
    </Card>
  );
};

export default SkillInsightCard;
