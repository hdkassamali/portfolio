"use client"

import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto section-padding py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Hadi Kassamali</h3>
            <p className="text-muted-foreground">Full Stack Developer</p>
          </div>

          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/hdkassamali" target="_blank" rel="noopener noreferrer">
                <Icons.github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/hadi-kassamali/" target="_blank" rel="noopener noreferrer">
                <Icons.linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://x.com/hdkassamali1623" target="_blank" rel="noopener noreferrer">
                <Icons.x className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:hdkassamali1623@gmail.com">
                <Icons.email className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Hadi Kassamali. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
