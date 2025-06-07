import { useState } from "react";
import { Badge } from "../ui/badge";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedPrompt } from "./animated-prompt";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchGeminiResponse } from "@/utils/fetch-gemini";


const AskAISection = () => {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState<string | null>(null);
  const LANGUAGE_OPTIONS = ["English", "Kyrgyz", "Russian"] as const;
  const [selectedLanguage, setSelectedLanguage] = useState<string>("English");



  const handleSubmit = async () => {
    if (question.trim()) {
      setLoading(true);
      try {
        const response = await fetchGeminiResponse(question, selectedLanguage);
        setAnswer(response);
        setQuestion("");
      } catch (error) {
        setAnswer("Sorry, something went wrong.");
      } finally {
        setLoading(false);
      }
    }
  };


  return (
    <Card className="mt-6 p-4 lg:py-8 lg:px-12 shadow-md border border-muted">
      <div className="grid lg:grid-cols-2 gap-x-16 mb-12">
        <div>
          <Card className="bg-muted/10 max-h-[370px]">
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

            <CardFooter className="flex justify-between items-center">
              <div className="flex gap-2 flex-wrap">
                {LANGUAGE_OPTIONS.map((lang) => (
                  <Badge
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
                    variant={selectedLanguage === lang ? "default" : "outline"}
                    className="cursor-pointer"
                  >
                    {lang}
                  </Badge>
                ))}
              </div>
              <Button
                onClick={handleSubmit}
                disabled={!question.trim() || loading}
                className="ml-auto"
              >
                {loading ? "Analyzing..." : "Submit"}
              </Button>
            </CardFooter>
          </Card>
        </div>

        <Card className="bg-muted/10">
          <CardHeader>
            <CardTitle className="text-2xl font-medium text-accent-foreground">
              Need Inspiration?
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2 text-sm text-muted-foreground">
            {[
              "What’s the best way to stay focused?",
              "How do I improve my speaking skills?",
              "Summarize today’s learning session.",
              "Give me a quick quiz on grammar.",
            ].map((prompt, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm text-muted-foreground cursor-pointer hover:bg-muted/70 transition"
                onClick={() => setQuestion(prompt)}
              >
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
      </div>

      <Card className="shadow-md border border-muted bg-muted/10">
        <CardContent>
          {answer && (
            <div className="mt-4 w-full p-4 border border-none rounded bg-muted/0">
              <p className="text-base font-medium text-foreground">AI Response:</p>
              <p className="mt-2 text-muted-foreground whitespace-pre-wrap">
                { answer }
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </Card>
  );
};

export default AskAISection;
