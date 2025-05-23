"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { courses } from "@/assets/data/courses";
import { Button } from "@/components/ui/button";
import Footer from "@/components/landing/footer";
import SearchInput from "@/components/quiz/search-bar"; 
import BadgesBox from "@/components/courses/badges-box";
import { PlayCircle, Clock, Users, BookIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";


export default function CoursesPage() {
  const [level, setLevel] = useState("a1");
  const [topic, setTopic] = useState("all");

  return (
    <div>
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Explore English Courses</h1>
            <p className="text-lg text-muted-foreground">
              Find the right course to improve your English based on your current level and interests.
            </p>
          </motion.div>

          <div className="max-w-xl mx-auto mb-12">
            <Card className="mb-4">
              <div className="px-4 pt-4">
                <SearchInput />
              </div>
              <BadgesBox setValueProps={setTopic} />
            </Card>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold mb-2">Available Courses</h2>
            <p className="text-muted-foreground">
              Browse through a variety of interactive and engaging courses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <Card className="h-full py-2">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full bg-muted/10 flex items-center justify-center text-muted`}>
                        <BookIcon className="w-8 h-8 text-blue-600" />
                      </div>
                      <CardTitle>{course.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col justify-between h-[calc(100%-80px)]">
                    <p className="text-muted-foreground mb-4">{course.description}</p>
                    <div className="flex justify-between text-sm text-muted-foreground mb-4">
                      <span><Clock className="inline-block mr-1" /> {course.duration}</span>
                      <span><Users className="inline-block mr-1" /> {course.enrolled} learners</span>
                    </div>
                    <Link href={`/courses/${course.id}`}>
                      <Button className="w-full">
                        Enroll Now <PlayCircle className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}

