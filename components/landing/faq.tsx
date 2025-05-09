"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How are the classes conducted at Brain Center?",
    answer:
      "Our classes are conducted in small groups with a maximum of 12 students per class to ensure personalized attention. We offer both in-person and online options to accommodate different learning preferences and schedules. All our classrooms are equipped with modern technology to enhance the learning experience.",
  },
  {
    question: "What levels are available for English language courses?",
    answer:
      "We offer English courses for all proficiency levels, from beginner (A1) to advanced (C2). Before enrollment, we conduct a placement test to determine your current level and recommend the most appropriate course. Each level typically takes 8-12 weeks to complete, depending on the intensity of the program.",
  },
  {
    question: "Do you provide certification upon course completion?",
    answer:
      "Yes, all students receive a Brain Center certificate upon successful completion of their course. For IT courses, we also prepare students for internationally recognized certifications such as Microsoft Office Specialist, CompTIA, and programming language-specific certifications. These credentials are highly valued by employers.",
  },
  {
    question: "What if I miss a class?",
    answer:
      "We understand that life can be unpredictable. If you miss a class, you'll have access to recorded sessions and all learning materials through our online platform. We also offer catch-up sessions and our instructors are available for additional support if needed. We recommend not missing more than two consecutive classes to maintain learning momentum.",
  },
  {
    question: "Can I switch between different courses?",
    answer:
      "Yes, you can switch between courses within the first two weeks if you feel another course would better suit your needs or interests. Please speak with our academic advisors who will help you make the transition smoothly. After two weeks, switching courses may be subject to availability and potential fees.",
  },
  {
    question: "What payment options do you offer?",
    answer:
      "We offer flexible payment options including one-time payment, monthly installments, and package deals for multiple courses. We accept credit/debit cards, bank transfers, and select digital payment methods. Discounts are available for early enrollment, referrals, and returning students.",
  },
  {
    question: "How do the online quizzes and assessments work?",
    answer:
      "Our online quizzes and assessments are available through our Learning Management System. They are designed to test your knowledge and track your progress throughout the course. For language assessments, we evaluate speaking, listening, reading, and writing skills. For IT courses, we assess theoretical knowledge and practical application through project-based evaluations.",
  },
  {
    question: "Do you offer job placement assistance?",
    answer:
      "Yes, we provide career guidance and job placement assistance for our students. This includes resume building, interview preparation, and connecting students with our network of employer partners. We also organize career fairs and networking events to help students explore opportunities in their field of study.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container flex flex-col md:flex-row lg:flex-row flex-wrap mx-auto space-y-24 lg:space-y-0">
        <div className="flex-1 px-8 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about our courses, teaching methods, and policies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
        <div className="flex-1 flex items-center justify-center p-2">
          <form className="w-full max-w-md bg-muted/0 shadow-lg rounded-lg px-8 py-14 space-y-10 border border-muted-background">
            <h2 className="text-2xl font-semibold text-foreground">Leave your feedback</h2>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="border shadow-inner bg-muted/20 mt-1 block w-full rounded-md border-input px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-accent"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="border shadow-inner bg-muted/20 mt-1 block w-full rounded-md border-input px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-accent"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-muted-foreground">
                Your Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="border shadow-inner bg-muted/20 mt-1 block w-full rounded-md border-input px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-accent"
                placeholder="Share your thoughts..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-accent-foreground w-full py-2 px-4 text-accent font-regular rounded-md hover:bg-accent/90 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-all duration-200"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}