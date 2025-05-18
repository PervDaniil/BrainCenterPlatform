"use client";

import TimerComponent from "./quiz/timer";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { HomeIcon, InfoIcon, Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { fetchQuizQuestions } from "@/utils/quiz-fetch";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";


interface IQuizGameParams {
  params: {
    level: string
    topic: string
  }
}

export default function QuizGame({ params }: IQuizGameParams) {
  const { level, topic } = params;
  const searchParams = useSearchParams();
  const area = searchParams.get('area');
  const [loading, setLoading] = useState(true);
  const [isCorrect, setIsCorrect] = useState(false);
  const [questions, setQuestions] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [showAnimation, setShowAnimation] = useState(false);

  async function fetchQuestions() {
    setLoading(true);
    try {
      const quizes = await fetchQuizQuestions(level, area? area : "common");
      setQuestions(quizes);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch quiz questions.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchQuestions();
  }, [level, topic]);

  const HandleAnswer = (index: number) => {
    setIsCorrect(false);
    setShowAnimation(true);

    if (index === questions[0].correct) {
      setIsCorrect(true);
    }

    setTimeout(() => setShowAnimation(false), 500);
    fetchQuestions();
  };

  return (
    <main className="relative w-full h-screen overflow-hidden grid place-content-center">
      <AnimatePresence>
        {showAnimation && (
          <motion.div
            className={`absolute top-0 left-0 w-full h-full z-30 ${isCorrect ? "bg-green-500" : "bg-red-700"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>

      <motion.div
        className="max-w-2xl mx-auto p-6 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="relative py-4 px-0 lg:py-6 lg:px-3 overflow-y-auto max-h-[70vh] lg:max-w-md">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              English Quiz: {topic.charAt(0).toUpperCase() + topic.slice(1)} ({level.toUpperCase()})
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex justify-center items-center space-x-2">
                <Loader2 className="animate-spin" /> <span>Loading questions...</span>
              </div>
            ) : error ? (
              <div className="text-red-500">{error}</div>
            ) : (
              questions.map((question, index) => (
                <motion.div
                  key={index}
                  className="mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}>
                  <Card className="p-4">
                    <h2 className="text-sm lg:text-lg font-semibold max-h-24 overflow-y-auto mb-4 max-w-xs lg:max-w-lg">{question.question}</h2>
                    <div className="space-y-3">
                      {question.answers.map((answer: string, i: number) => (
                        <Button
                          key={i}
                          onClick={() => HandleAnswer(i)}
                          variant="outline"
                          className="h-auto w-full whitespace-normal break-words"
                        >
                          <span>
                            {answer}
                          </span>
                        </Button>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))
            )}
          </CardContent>
          <CardFooter className="px-6 py-0">
            <div className="w-full flex flex-row items-center justify-between">
              <Dialog>
                <DialogTrigger><InfoIcon className="cursor-pointer" /></DialogTrigger>
                <DialogContent>
                  <DialogTitle>Explanation</DialogTitle>
                  {questions.map(question => (
                    <p className="text-sm text-foreground">
                      {question.explanation}
                    </p>
                  ))}
                </DialogContent>
              </Dialog>
              <div>
                <Link href={"/quiz"}>
                  <HomeIcon className="cursor-pointer" />
                </Link>
              </div>
            </div>
          </CardFooter>
        </Card>
      </motion.div>

      <div className="absolute bottom-5 left-5">
        <TimerComponent />
      </div>
    </main>
  );
}
