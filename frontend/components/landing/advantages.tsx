"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { 
  Users, Clock, Award, BookOpen, 
  Laptop, GraduationCap, Globe, Zap 
} from "lucide-react";

export default function Advantages() {
  const advantagesRef = useRef(null);

  const advantages = [
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Expert Instructors",
      description:
        "Learn from certified professionals with years of industry experience and teaching expertise.",
    },
    {
      icon: <Clock className="h-10 w-10 text-chart-1" />,
      title: "Flexible Schedule",
      description:
        "Attend classes that fit your busy lifestyle with morning, evening, and weekend options.",
    },
    {
      icon: <Award className="h-10 w-10 text-chart-2" />,
      title: "Recognized Certification",
      description:
        "Receive certificates that are recognized by employers and educational institutions.",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-chart-3" />,
      title: "Comprehensive Materials",
      description:
        "Access quality learning resources, practice tests, and supplementary materials.",
    },
    {
      icon: <Laptop className="h-10 w-10 text-chart-4" />,
      title: "Modern Facilities",
      description:
        "Study in state-of-the-art classrooms equipped with the latest technology.",
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-chart-5" />,
      title: "Personalized Learning",
      description:
        "Benefit from individualized attention with small class sizes and customized learning plans.",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Global Perspective",
      description:
        "Gain insights into international standards and practices applicable worldwide.",
    },
    {
      icon: <Zap className="h-10 w-10 text-chart-1" />,
      title: "Rapid Progress",
      description:
        "See measurable improvements through our proven accelerated learning methods.",
    },
  ];

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
    <section id="advantages" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Brain Center
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're committed to providing the highest quality education through innovative
            teaching methods and a supportive learning environment.
          </p>
        </div>

        <motion.div
          ref={advantagesRef}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-card hover:bg-card/90 transition-all duration-300 p-6 rounded-xl border shadow-sm hover:shadow-md"
            >
              <div className="mb-4">{advantage.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
              <p className="text-muted-foreground">{advantage.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}