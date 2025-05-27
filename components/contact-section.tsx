"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone } from "lucide-react"
import { Icons } from "@/components/icons"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 section-padding bg-muted/50 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to meeting new people, exchanging new ideas, and chatting about anything tech or non-tech
            related.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">Let's work together</h3>
              <p className="text-muted-foreground mb-6">
                Looking to build a website or have a quick coffee chat? You can schedule a meeting using my calendar,
                reach out on{" "}
                <a href="https://www.linkedin.com/in/hadi-kassamali/" className="text-blue-400 hover:underline">
                  LinkedIn
                </a>
                , or contact me directly via email or phone.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                  <Icons.email className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">hdkassamali1623@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+1 (714) 661-0109</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Irvine, California</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden h-full">
              <CardContent className="p-0">
                <iframe
                  src="https://cal.com/hadi-kassamali/30min"
                  width="100%"
                  height="630"
                  frameBorder="0"
                  title="Schedule a meeting with Hadi Kassamali"
                  className="w-full h-full min-h-[500px]"
                ></iframe>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
