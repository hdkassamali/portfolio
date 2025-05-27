"use server"

import { z } from "zod"

// Form validation schema
const ContactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof ContactFormSchema>

export async function sendContactForm(formData: FormData) {
  try {
    // Extract form data
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    // Validate form data
    const result = ContactFormSchema.safeParse(data)

    if (!result.success) {
      return {
        success: false,
        message: "Validation failed",
        errors: result.error.flatten().fieldErrors,
      }
    }

    // In a real application, you would send an email here using a service like
    // Nodemailer, SendGrid, Resend, etc.
    // For demonstration purposes, we'll just log the data and simulate a delay
    console.log("Form data received:", data)
    await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate network delay

    // Return success response
    return {
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
    }
  } catch (error) {
    console.error("Error sending contact form:", error)
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    }
  }
}
