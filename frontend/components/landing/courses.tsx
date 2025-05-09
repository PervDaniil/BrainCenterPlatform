"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

// Define our courses data
const courses = [
  {
    id: 1,
    title: "English for Beginners",
    category: "Language",
    level: "Beginner",
    rating: 4.9,
    reviews: 234,
    lessons: 24,
    duration: "8 weeks",
    description: "Master essential vocabulary, grammar, and conversation skills for everyday situations.",
    image: "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    title: "Business English",
    category: "Language",
    level: "Intermediate",
    rating: 4.8,
    reviews: 189,
    lessons: 30,
    duration: "10 weeks",
    description: "Develop professional communication skills for meetings, presentations, and business correspondence.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    title: "Advanced Excel Mastery",
    category: "Office",
    level: "Intermediate",
    rating: 4.9,
    reviews: 312,
    lessons: 18,
    duration: "6 weeks",
    description: "Learn advanced functions, data analysis, visualization, and automation with Excel.",
    image: "https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    title: "Python Programming Fundamentals",
    category: "Programming",
    level: "Beginner",
    rating: 4.7,
    reviews: 276,
    lessons: 36,
    duration: "12 weeks",
    description: "Build a solid foundation in Python programming with hands-on projects and exercises.",
    image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 5,
    title: "Java Development",
    category: "Programming",
    level: "Intermediate",
    rating: 4.8,
    reviews: 198,
    lessons: 40,
    duration: "14 weeks",
    description: "Comprehensive Java programming course covering OOP, data structures, and application development.",
    image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 6,
    title: "Professional PowerPoint",
    category: "Office",
    level: "All Levels",
    rating: 4.6,
    reviews: 154,
    lessons: 15,
    duration: "5 weeks",
    description: "Create stunning presentations with advanced design techniques and effective storytelling.",
    image: "https://images.pexels.com/photos/3153204/pexels-photo-3153204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

// Map categories to colors
const categoryColors = {
  Language: "primary",
  Office: "chart-1",
  Programming: "chart-2",
};

export default function Courses() {
  const courseRef = useRef(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="courses" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Courses
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Expand your skills with our most popular courses designed to help you 
            succeed in today's competitive environment.
          </p>
        </motion.div>

        <div className="hidden lg:block">
          <motion.div
            ref={courseRef}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} variants={item} />
            ))}
          </motion.div>
        </div>

        <div className="lg:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {courses.map((course) => (
                <CarouselItem key={course.id} className="md:basis-1/2">
                  <CourseCard course={course} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-8">
              <CarouselPrevious className="static transform-none mr-2" />
              <CarouselNext className="static transform-none" />
            </div>
          </Carousel>
        </div>

        <div className="mt-12 text-center">
          <Button size="lg">
            View All Courses <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function CourseCard({ course, variants = {} }) {
  return (
    <motion.div
      variants={variants}
      className="bg-card rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative h-48">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
        <div className="absolute top-4 left-4">
          <Badge className={`bg-${categoryColors[course.category]} hover:bg-${categoryColors[course.category]}/90`}>
            {course.category}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Badge variant="outline" className="bg-card/80 backdrop-blur-sm">
            {course.level}
          </Badge>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
        
        <p className="text-muted-foreground mb-4">
          {course.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
            <span className="font-medium">{course.rating}</span>
            <span className="text-muted-foreground ml-1">({course.reviews})</span>
          </div>
          <div className="text-sm text-muted-foreground">
            {course.lessons} lessons · {course.duration}
          </div>
        </div>
        
        <Link href={`/courses/${course.id}`}>
          <Button variant="outline" className="w-full">
            View Course
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}