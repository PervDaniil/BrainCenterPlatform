"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  Globe, 
  FileText, 
  Headphones, 
  MessageSquare 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Footer from "@/components/landing/footer";

// English proficiency levels
const proficiencyLevels = [
  { value: "a1", label: "A1 - Beginner" },
  { value: "a2", label: "A2 - Elementary" },
  { value: "b1", label: "B1 - Intermediate" },
  { value: "b2", label: "B2 - Upper Intermediate" },
  { value: "c1", label: "C1 - Advanced" },
  { value: "c2", label: "C2 - Proficient" },
];

// Quiz categories
const quizCategories = [
  {
    id: "grammar",
    title: "Grammar & Vocabulary",
    icon: <FileText className="h-8 w-8" />,
    description:
      "Test your understanding of English grammar rules, sentence structure, and vocabulary usage.",
    questions: "40 questions",
    time: "45 minutes",
    color: "primary",
  },
  {
    id: "listening",
    title: "Listening Comprehension",
    icon: <Headphones className="h-8 w-8" />,
    description:
      "Evaluate your ability to understand spoken English in various contexts and situations.",
    questions: "30 questions",
    time: "35 minutes",
    color: "chart-1",
  },
  {
    id: "reading",
    title: "Reading Comprehension",
    icon: <Globe className="h-8 w-8" />,
    description:
      "Assess your skills in understanding written English texts, from basic to complex passages.",
    questions: "35 questions",
    time: "40 minutes",
    color: "chart-2",
  },
  {
    id: "speaking",
    title: "Speaking Practice",
    icon: <MessageSquare className="h-8 w-8" />,
    description:
      "Practice your spoken English through recorded responses to prompts and scenarios.",
    questions: "20 questions",
    time: "30 minutes",
    color: "chart-3",
  },
];

export default function QuizPage() {
  const [level, setLevel] = useState("");
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Test Your English Proficiency
          </h1>
          <p className="text-lg text-muted-foreground">
            Take our comprehensive assessment to determine your current English level
            or practice specific skills to improve your language abilities.
          </p>
        </motion.div>

        <div className="max-w-md mx-auto mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Select Your Level</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Choose your current English proficiency level or select "Not Sure" to take a 
                placement test.
              </p>
              <Select value={level} onValueChange={setLevel}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="not-sure">Not Sure (Take Placement Test)</SelectItem>
                  {proficiencyLevels.map((level) => (
                    <SelectItem key={level.value} value={level.value}>
                      {level.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold mb-2">Choose Quiz Type</h2>
          <p className="text-muted-foreground">
            Select a category to practice specific English language skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {quizCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full bg-${category.color}/10 flex items-center justify-center text-${category.color}`}>
                      {category.icon}
                    </div>
                    <CardTitle>{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col justify-between h-[calc(100%-80px)]">
                  <p className="text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  <div>
                    <div className="flex justify-between text-sm text-muted-foreground mb-4">
                      <span>{category.questions}</span>
                      <span>{category.time}</span>
                    </div>
                    <Link
                      href={
                        level
                          ? `/quiz/${level}/${category.id}`
                          : "#"
                      }
                      onClick={(e) => {
                        if (!level) {
                          e.preventDefault();
                          alert("Please select a proficiency level first");
                        }
                      }}
                    >
                      <Button className="w-full">
                        Start Quiz <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-3xl mx-auto bg-card p-6 rounded-lg border"
        >
          <h3 className="text-xl font-semibold mb-4">About Our Assessment</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Our English proficiency tests are designed according to the Common European Framework 
              of Reference for Languages (CEFR), providing an accurate assessment of your language skills.
            </p>
            <p>
              Each test evaluates different aspects of English language proficiency, from grammar and 
              vocabulary to listening, reading, and speaking abilities.
            </p>
            <p>
              After completing the assessment, you'll receive detailed feedback on your strengths and 
              areas for improvement, along with recommended courses tailored to your needs.
            </p>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
}