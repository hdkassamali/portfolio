"use client"

import { motion } from "framer-motion"

export function CalWidget() {
  return (
    <section className="py-20 section-padding bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Chat!</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to meeting new people, exchanging new ideas, and chatting about anything tech or non-tech related.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-background rounded-lg shadow-lg overflow-hidden"
        >
          <iframe
            src="https://cal.com/hadi-kassamali/30min"
            width="100%"
            height="630"
            frameBorder="0"
            title="Schedule a meeting with Hadi Kassamali"
            className="w-full"
          ></iframe>
        </motion.div>
      </div>
    </section>
  )
}
