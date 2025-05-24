"use client";

import { db } from "@/firebase";
import QuizBlock from "./quiz/quiz-block";
import { useUser } from "@/hooks/useUser";
import TimerComponent from "./quiz/timer";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { fetchQuizQuestions } from "@/utils/quiz-fetch";
import { motion, AnimatePresence } from "framer-motion";
import { setDoc, updateDoc, doc, arrayUnion, getDoc } from "firebase/firestore";


interface IQuizGameParams {
  params: {
    level: string;
    topic: string;
  };
}

export default function QuizGame({ params }: IQuizGameParams) {
  const user = useUser();
  const { level, topic } = params;
  const searchParams = useSearchParams();
  const area = searchParams.get("area");

  const [loading, setLoading] = useState(true);
  const [isCorrect, setIsCorrect] = useState(false);
  const [questions, setQuestions] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [showAnimation, setShowAnimation] = useState(false);

  async function fetchQuestions() {
    setLoading(true);
    try {
      const quizes = await fetchQuizQuestions(level, area ? area : "common");
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

  const HandleAnswer = async (index: number) => {
    if (!questions.length) return;

    const correct = index === questions[0].correct;

    const quizEntry = {
      area: area,
      question: questions[0].question,
      topic: questions[0].topic,
      failed: !correct,
      timestamp: new Date(),
    };

    setIsCorrect(correct);
    setShowAnimation(true);

    setTimeout(() => setShowAnimation(false), 500);
    fetchQuestions();

    if (user) {
      const userRef = doc(db, "users-statistics", user.uid);
      const docSnap = await getDoc(userRef);

      if (!docSnap.exists()) {
        await setDoc(userRef, {
          "passed-quizes": [quizEntry],
        });
      } else {
        await updateDoc(userRef, {
          "passed-quizes": arrayUnion(quizEntry),
        });
      }
    }
  };

  return (
    <main className="bg-[url('https://images.unsplash.com/photo-1668681919287-7367677cdc4c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhY2tncm91bmQlMjBhYnN0cmFjdHxlbnwwfHwwfHx8MA%3D%3D')] bg-cover relative w-full h-screen overflow-hidden grid place-content-center">
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

      <motion.div className="max-w-2xl mx-auto p-6 z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <QuizBlock topic={topic} level={level} loading={loading} error={error} questions={questions} handleAnswer={HandleAnswer} />
      </motion.div>
    </main>
  );
}
