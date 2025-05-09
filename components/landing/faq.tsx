"use client";

import { motion } from "framer-motion";
import { faqs } from '@/assets/data/faq';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-muted/10">
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