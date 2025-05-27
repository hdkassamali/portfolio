"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 section-padding scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn more about my journey, skills, and what drives me as a developer
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="/images/basketball-rome.jpeg"
                  alt="Hadi playing basketball in Rome"
                  width={800}
                  height={600}
                  quality={90}
                  className="object-cover w-full h-full"
                />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              I spent over three years in tech sales, pitching NoSQL databases to senior software engineers, CTOs, and
              enterprise architects. After a while, chasing quota each quarter and recycling the same playbook
              felt…hollow. I craved work that flipped the switch in my brain, not just another quarterly report to hit.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In those sales meetings I noticed the level of real domain expertise at work that those technical leaders
              had and thought, "I want that." So I dove into software development and fell in love instantly. Solving
              tricky UX challenges, adapting on the fly, and tapping into a never-ending well of new knowledge is
              exactly what gets me out of bed. For someone with an extreme thirst for learning, every sprint and bug fix
              still feels fresh, and this is exactly the space where I belong.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in building scalable web applications using React, Next.js, and TypeScript on the frontend,
              with Node.js and various databases on the backend. I'm always eager to learn new technologies and tackle
              challenging problems. I believe in writing clean, maintainable code and creating user experiences that
              make a difference.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me shooting hoops, hanging out with family, watching movies (or the
              Chargers, though that's not always fun 😂😭), and hunting down the next great burger spot.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src="/images/hadi-cody-meetup.jpeg"
                    alt="Hadi at a tech meetup"
                    width={800}
                    height={600}
                    quality={90}
                    className="object-cover w-full h-48"
                  />
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src="/images/meetup-ai.jpeg"
                    alt="Hadi at an AI meetup"
                    width={800}
                    height={600}
                    quality={90}
                    className="object-cover w-full h-48"
                  />
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src="/images/hadi-software-desk.jpeg"
                    alt="Hadi working at his desk"
                    width={800}
                    height={600}
                    quality={90}
                    className="object-cover w-full h-48"
                  />
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
