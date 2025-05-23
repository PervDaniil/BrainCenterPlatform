import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

type BadgesBoxProps = {
    setValueProps: (value: string) => void;
};

const groupedAreas: { [category: string]: string[] } = {
    "Present Tenses": [
        "Present Simple",
        "Present Continuous",
        "Present Perfect",
        "Present Perfect Continuous",
    ],
    "Past Tenses": [
        "Past Simple",
        "Past Continuous",
        "Past Perfect",
        "Past Perfect Continuous",
    ],
    "Future Tenses": [
        "Future Simple",
        "Future Continuous",
        "Future Perfect",
        "Future Perfect Continuous",
    ],
    "Grammar Rules": [
        "Subject-Verb Agreement",
        "Articles",
        "Plural Nouns",
        "Countable and Uncountable Nouns",
        "Pronouns",
        "Modifiers",
        "Prepositions",
        "Conjunctions",
        "Conjunctions and Connectors",
        "Determiners",
    ],
    "Syntax and Sentence Structure": [
        "Direct and Indirect Speech",
        "Active and Passive Voice",
        "Questions",
        "Conditionals",
        "Punctuation",
        "Relative Clauses",
    ],
    "Verbs and Modifiers": [
        "Verb Forms",
        "Gerunds and Infinitives",
        "Adjective and Adverb Comparison",
        "Comparatives and Superlatives",
    ],
};

export default function BadgesBox({ setValueProps }: BadgesBoxProps) {
    const [selectedArea, setSelectedArea] = useState<string | null>(null);

    const handleClick = (area: string) => {
        setSelectedArea(area);
        setValueProps(area);
    };

    return (
        <Accordion type="multiple" className="w-full px-6 py-4">
            {Object.entries(groupedAreas).map(([category, areas]) => (
                <AccordionItem key={category} value={category}>
                    <AccordionTrigger className="text-sm text-muted-foreground">{category}</AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-wrap gap-2 py-2">
                            {areas.map((area) => (
                                <Badge
                                    key={area}
                                    variant={selectedArea === area ? "default" : "outline"}
                                    onClick={() => handleClick(area)}
                                    className="cursor-pointer"
                                >
                                    {area}
                                </Badge>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
