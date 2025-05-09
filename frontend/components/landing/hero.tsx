"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, GraduationCap, BookOpen, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-chart-1/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="mb-6">
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Elevate Your Skills with Brain Center
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Unlock Your Potential with{" "}
            <span className="text-primary">Expert-Led</span> Education
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            Join Brain Center's comprehensive courses in English language and IT
            skills. From beginner to advanced, we provide the tools you need to
            succeed in today's digital world.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="#courses">
              <Button size="lg" className="w-full sm:w-auto">
                Explore Courses <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/quiz">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Take a Placement Quiz
              </Button>
            </Link>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-card hover:bg-card/80 transition-colors p-6 rounded-lg border shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">English Courses</h3>
              <p className="text-muted-foreground">
                From beginner to advanced, develop your English speaking,
                writing, and comprehension skills.
              </p>
            </div>

            <div className="bg-card hover:bg-card/80 transition-colors p-6 rounded-lg border shadow-sm">
              <div className="w-12 h-12 bg-chart-1/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <BookOpen className="h-6 w-6 text-chart-1" />
              </div>
              <h3 className="text-xl font-medium mb-2">Office Skills</h3>
              <p className="text-muted-foreground">
                Master essential tools like Excel, Word, and PowerPoint for
                professional success.
              </p>
            </div>

            <div className="bg-card hover:bg-card/80 transition-colors p-6 rounded-lg border shadow-sm">
              <div className="w-12 h-12 bg-chart-2/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Code className="h-6 w-6 text-chart-2" />
              </div>
              <h3 className="text-xl font-medium mb-2">Programming</h3>
              <p className="text-muted-foreground">
                Learn Python, Java, C# and more with hands-on projects and expert
                guidance.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}