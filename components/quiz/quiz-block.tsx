"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HomeIcon, InfoIcon, Loader2 } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";


interface IQuizBlock {
    topic: string;
    level: string;
    loading: boolean;
    error: string | null;
    questions: {
        question: string;
        answers: string[];
        explanation: string;
    }[];
    handleAnswer: (i: number) => void;
}

export default function QuizBlock({ topic, level, loading, error, questions, handleAnswer }: IQuizBlock) {
    return (
        <Card className="relative backdrop-blur-lg bg-transparent py-4 px-0 lg:py-6 lg:px-3 overflow-y-auto max-h-[70vh] lg:max-w-md">
            <CardHeader>
                <CardTitle className="text-center text-2xl">
                    English Quiz: {topic.charAt(0).toUpperCase() + topic.slice(1)} (
                    {level.toUpperCase()})
                </CardTitle>
            </CardHeader>
            <CardContent>
                {loading ? (
                    <div className="flex justify-center items-center space-x-2">
                        <Loader2 className="animate-spin" />{" "}
                        <span>Loading questions...</span>
                    </div>
                ) : error ? (
                    <div className="text-red-500">{error}</div>
                ) : (
                    questions.slice(0, 1).map((question, index) => (
                        <motion.div
                            key={index}
                            className="mb-6"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="bg-transparent border-none p-4">
                                <h2 className="text-sm lg:text-lg font-semibold max-h-24 overflow-y-auto mb-4 max-w-xs lg:max-w-lg">
                                    {question.question}
                                </h2>
                                <div className="space-y-3">
                                    {question.answers.map((answer: string, i: number) => (
                                        <Button
                                            key={i}
                                            onClick={() => handleAnswer(i)}
                                            variant="outline"
                                            className="h-auto w-full whitespace-normal break-words bg-transparent backdrop-blur-sm"
                                        >
                                            <span>{answer}</span>
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
                        <DialogTrigger>
                            <InfoIcon className="w-5 cursor-pointer" />
                        </DialogTrigger>
                        <DialogContent>
                            <DialogTitle>Explanation</DialogTitle>
                            {questions.slice(0, 1).map((question, idx) => (
                                <p key={idx} className="text-sm text-foreground">
                                    {question.explanation}
                                </p>
                            ))}
                        </DialogContent>
                    </Dialog>
                    <Link href={"/quiz"}>
                        <HomeIcon className="w-5 cursor-pointer" />
                    </Link>
                </div>
            </CardFooter>
        </Card>
    )
}