"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { Icons } from "@/components/icons"

const projects = [
  {
    title: "Elfgorithm",
    description:
      "Elfgorithm is an AI-powered Secret Santa platform that makes gift exchanges delightful and effortless. Perfect for organizing gift exchanges between colleagues, friends, and family, Elfgorithm takes the guesswork out of gift-giving with personalized AI suggestions.",
    image: "/images/elfgorithm-example.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Supabase",
      "OpenAI",
      "React Hook Form",
      "Zod",
      "Shadcn/UI",
      "TailwindCSS",
      "Vercel",
      "Storybook",
      "Jest",
      "RTL",
    ],
    demoUrl: "https://elfgorithm.vercel.app/",
    githubUrl: "https://github.com/LetsGetTechnical/elecretanta",
  },
  {
    title: "The Court Connect",
    description:
      "The Court Connect is a full-stack Flask web application that connects basketball enthusiasts with basketball courts around the world. Users can register, log in, and search for basketball courts via the Google Maps API. They can then save their favorite courts to their profile and rate them.",
    image: "/images/brooklyn-search-court-connect.png",
    technologies: [
      "Python",
      "Flask",
      "Javascript",
      "HTML",
      "CSS",
      "PostgreSQL",
      "SQLAlchemy",
      "Render",
      "Neon",
      "Jinja",
      "Bootstrap",
      "Pytest",
      "Jasmine",
      "UptimeRobot",
    ],
    demoUrl: "https://thecourtconnect.onrender.com/",
    githubUrl: "https://github.com/hdkassamali/The-Court-Connect",
  },
  {
    title: "Not Another  Dashboard",
    description:
      "NotAnotherDashboard empowers restaurants with AI-driven actionable intelligence, transforming raw sales data into clear, intuitive visualizations. It provides a full performance overview from corporate to store level. This empowers managers to spot trends, optimize menus, and boost profitability by revealing what sells, where, and when.",
    image: "/images/nan-image-portfolio.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Supabase",
      "OpenAI",
      "React Hook Form",
      "Tanstack Query",
      "Zod",
      "Shadcn/UI",
      "TailwindCSS",
      "Vercel",
      "Jest",
      "RTL",
    ],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 section-padding scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated selection of web apps I've built, solo and in collaboration, showcasing the tools and techniques
            behind them
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                  />
                  {(project.demoUrl || project.githubUrl) && (
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                      {project.demoUrl && (
                        <Button size="sm" variant="secondary" asChild>
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Website
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button size="sm" variant="secondary" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Icons.github className="h-4 w-4 mr-1" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
