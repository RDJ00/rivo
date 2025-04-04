"use client"

import { motion } from "framer-motion"
import { Calendar, Bell, FileText, Home, PenToolIcon as Tool, Shield } from "lucide-react"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import CTASection from "@/components/cta-section"
import NewsletterSection from "@/components/newsletter-section"

export default function HomePage() {
  const homeFeatures = [
    {
      icon: <Calendar size={24} />,
      title: "Smart Reminders",
      description:
        "Never miss important maintenance tasks with intelligent, timely reminders based on your home's specific needs.",
    },
    {
      icon: <Bell size={24} />,
      title: "Maintenance Alerts",
      description: "Receive proactive alerts about potential issues before they become expensive problems.",
    },
    {
      icon: <Tool size={24} />,
      title: "Service Booking",
      description: "Easily book qualified service providers directly through the platform with just a few clicks.",
    },
    {
      icon: <FileText size={24} />,
      title: "Document Storage",
      description: "Keep all your home-related documents, warranties, and manuals organized in one secure place.",
    },
    {
      icon: <Home size={24} />,
      title: "Home Inventory",
      description: "Track all your home systems and appliances with detailed information and maintenance history.",
    },
    {
      icon: <Shield size={24} />,
      title: "Warranty Tracking",
      description: "Never lose track of important warranty information with automatic expiration reminders.",
    },
  ]

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  }

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <HeroSection
        title="Smart Home Maintenance Made Simple"
        subtitle="RivoHome helps you protect your biggest investment with smart reminders, service bookings, and document storage all in one place."
        ctaText="Get Started"
        ctaLink="#"
        image="/placeholder.svg?height=600&width=800"
        imageAlt="Smart home maintenance dashboard"
      />

      <FeaturesSection
        title="Everything You Need to Maintain Your Home"
        subtitle="RivoHome provides all the tools you need to keep your home in perfect condition."
        features={homeFeatures}
      />

      <CTASection
        title="Ready to simplify your home maintenance?"
        subtitle="Join thousands of homeowners who have saved time and money with RivoHome."
        ctaText="Start Your Free Trial"
        ctaLink="#"
      />

      <NewsletterSection
        title="Stay Updated"
        subtitle="Subscribe to our newsletter for the latest home maintenance tips and updates."
      />
    </motion.div>
  )
}

