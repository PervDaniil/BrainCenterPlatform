import { useState } from "react";
import { Badge } from "@/components/ui/badge";


type BadgesBoxProps = {
    setValueProps: (value: string) => void;
};

export default function BadgesBox({ setValueProps }: BadgesBoxProps) {
    const AREAS = [
        "IT", "Management", "Buisness", "Life Sciences", "Tourism", "Law & Government", "Architecture & Urban Design"
    ];

    const [selectedArea, setSelectedArea] = useState<string | null>(null);

    const handleClick = (area: string) => {
        setSelectedArea(area);
        setValueProps(area);
    };

    return (
        <div className="flex flex-row flex-wrap gap-x-1 gap-y-2 px-6 py-4 cursor-pointer ">
            {AREAS.map((area, index) => (
                <Badge
                    key={index}
                    variant={selectedArea === area ? "default" : "outline"}
                    onClick={() => handleClick(area)}>
                    {area}
                </Badge>
            ))}
        </div>
    );
}
