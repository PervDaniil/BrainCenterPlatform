"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [100, 0, 0, 100]);

  const benefits = [
    "Expert instructors with industry experience",
    "Small class sizes for personalized attention",
    "Flexible scheduling options for busy learners",
    "Modern curriculum updated with latest technologies",
    "Career support and placement assistance",
    "Hands-on projects and real-world applications",
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-muted/30 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            style={{ opacity, y }}
            className="w-full lg:w-1/2 order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About Brain Center
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Founded in st. Ivanovka in 2022, Brain Center has been dedicated to providing
              high-quality education that bridges the gap between academic
              knowledge and practical skills. Our mission is to empower students
              with the tools they need to succeed in an increasingly competitive
              global marketplace.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              With a team of passionate educators and industry professionals, we
              create learning experiences that are engaging, challenging, and
              relevant to today's demands.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            style={{ opacity, y: useTransform(y, (value) => value * -1) }}
            className="w-full lg:w-1/2 order-1 lg:order-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://keiin.kg/wp-content/uploads/2022/07/IMG_15822-768x512-1.jpg"
                alt="Students learning at Brain Center"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-xl font-medium">
                    Empowering students since 2022
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}