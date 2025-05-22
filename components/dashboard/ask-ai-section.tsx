import { useState } from "react";
import { Badge } from "../ui/badge";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedPrompt } from "./animated-prompt";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";


const AskAISection = () => {
  const [question, setQuestion] = useState("");

  const handleSubmit = () => {
    console.log("Submitting question to AI:", question);
    setQuestion("");
  };

  return (
    <Card className="mt-6 p-4 lg:py-8 lg:px-12 grid lg:grid-cols-2 shadow-md border border-muted gap-x-16">
      <Card className="bg-muted/10">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Ask AI for Help
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <Textarea
            placeholder="Describe your situation or ask a question..."
            className="p-4 min-h-[180px] resize-none bg-muted/5 shadow-inner"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </CardContent>

        <CardFooter>
          <Button
            onClick={handleSubmit}
            disabled={!question.trim()}
            className="ml-auto"
          >
            Submit
          </Button>
        </CardFooter>
      </Card>

      <Card className="bg-muted/10">
        <CardHeader>
          <CardTitle className="text-2xl font-medium text-accent-foreground">Need Inspiration?</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2 text-sm text-muted-foreground">
          {[
            "What’s the best way to stay focused?",
            "How do I improve my speaking skills?",
            "Summarize today’s learning session.",
            "Give me a quick quiz on grammar.",
            "Summarize today’s learning session.",
            "Give me a quick quiz on grammar.",
          ].map((prompt, index) => (
            <Badge key={index} variant="outline" className="px-4 py-2 text-sm text-muted-foreground cursor-pointer hover:bg-muted/70 transition">
              {prompt}
            </Badge>
          ))}
          <div className="w-full p-4 mt-6">
            <AnimatedPrompt
              prompts={[
                "Need a productivity boost?",
                "Struggling with your schedule?",
                "Want to sharpen your grammar?",
                "Ask anything — I'm here to help!",
              ]}
            />
          </div>
        </CardContent>
      </Card>
    </Card>
  );
};

export default AskAISection;
