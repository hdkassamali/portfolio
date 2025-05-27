"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Icons } from "@/components/icons"

const technologies = [
  { name: "TypeScript", icon: <Icons.typescript className="h-8 w-8 mx-auto" /> },
  { name: "JavaScript", icon: <Icons.javascript className="h-8 w-8 mx-auto" /> },
  { name: "Python", icon: <Icons.python className="h-8 w-8 mx-auto" /> },
  { name: "React", icon: <Icons.react className="h-8 w-8 mx-auto" /> },
  { name: "Next.js", icon: <Icons.nextjs className="h-8 w-8 mx-auto" /> },
  { name: "Node.js", icon: <Icons.nodejs className="h-8 w-8 mx-auto" /> },
  { name: "Express", icon: <Icons.express className="h-8 w-8 mx-auto" /> },
  { name: "Flask", icon: <Icons.flask className="h-8 w-8 mx-auto" /> },
  { name: "PostgreSQL", icon: <Icons.postgres className="h-8 w-8 mx-auto" /> },
  { name: "Supabase", icon: <Icons.supabase className="h-8 w-8 mx-auto" /> },
  { name: "Render", icon: <Icons.render className="h-8 w-8 mx-auto" /> },
  { name: "Vercel", icon: <Icons.vercel className="h-8 w-8 mx-auto" /> },
  { name: "Jasmine", icon: <Icons.jasmine className="h-8 w-8 mx-auto" /> },
  { name: "Jest", icon: <Icons.jest className="h-8 w-8 mx-auto" /> },
  { name: "React Query", icon: <Icons.reactQuery className="h-8 w-8 mx-auto" /> },
  { name: "AWS", icon: <Icons.aws className="h-8 w-8 mx-auto" /> },
  { name: "Google Cloud", icon: <Icons.gcp className="h-8 w-8 mx-auto" /> },
  { name: "OpenAI", icon: <Icons.openAI className="h-8 w-8 mx-auto" /> },
  { name: "Tailwind CSS", icon: <Icons.tailwindcss className="h-8 w-8 mx-auto" /> },
  { name: "Bootstrap", icon: <Icons.bootstrap className="h-8 w-8 mx-auto" /> },
  { name: "Framer Motion", icon: <Icons.framermotion className="h-8 w-8 mx-auto" /> },
  { name: "Shadcn/ui", icon: <Icons.shadcn className="h-8 w-8 mx-auto" /> },
]

export function TechnologiesSection() {
  return (
    <section id="technologies" className="py-20 section-padding bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card className="text-center p-4 hover:shadow-lg transition-all duration-300 group-hover:border-primary/50">
                <CardContent className="p-0">
                  <div className="mb-2">{tech.icon}</div>
                  <h3 className="font-medium text-sm">{tech.name}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
