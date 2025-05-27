import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hadi Kassamali - Full Stack Developer",
  description: "Personal portfolio showcasing full stack development skills, projects, and experience.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Hadi Kassamali" }],
  openGraph: {
    title: "Hadi Kassamali - Full Stack Developer",
    description: "Personal portfolio showcasing full stack development skills, projects, and experience.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
