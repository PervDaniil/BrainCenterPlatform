"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Professional",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content:
      "The Business English course completely transformed my professional communication skills. The instructor was exceptional, and the course material was directly applicable to my daily work. I've received numerous compliments on my presentation skills since completing the course.",
    course: "Business English",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Data Analyst",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content:
      "The Advanced Excel Mastery course was exactly what I needed to take my data analysis skills to the next level. The practical exercises and real-world examples helped me implement advanced techniques in my workplace immediately. Highly recommended!",
    course: "Advanced Excel Mastery",
  },
  {
    id: 3,
    name: "Aisha Patel",
    role: "Software Developer",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content:
      "As someone with no programming background, I was nervous about learning Python. Brain Center's approach made the learning process enjoyable and accessible. The instructors were patient and the course structure built my confidence gradually. I'm now working on my own projects!",
    course: "Python Programming Fundamentals",
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "International Student",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content:
      "I joined the English for Beginners course when I first moved to the country. The supportive environment and focused curriculum helped me build confidence in speaking English daily. The teachers were encouraging and the small class size meant I got plenty of practice.",
    course: "English for Beginners",
  },
];

export default function Feedback() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear from our graduates about how Brain Center has helped them achieve their
            educational and career goals.
          </p>
        </motion.div>

        <div className="hidden lg:block">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-8">
              <CarouselPrevious className="static transform-none mr-2" />
              <CarouselNext className="static transform-none" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-card rounded-xl p-6 border shadow-sm h-full flex flex-col">
      <div className="mb-6">
        <Quote className="h-10 w-10 text-primary/20" />
      </div>
      
      <p className="text-lg mb-6 flex-grow">{testimonial.content}</p>
      
      <div className="flex items-center">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        
        <div>
          <p className="font-semibold">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          <p className="text-sm text-primary">Course: {testimonial.course}</p>
        </div>
      </div>
    </div>
  );
}