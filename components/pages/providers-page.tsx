"use client"

import { motion } from "framer-motion"
import { Users, Calendar, DollarSign, Star, BarChart, MessageSquare } from "lucide-react"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import CTASection from "@/components/cta-section"
import NewsletterSection from "@/components/newsletter-section"

export default function ProvidersPage() {
  const providerFeatures = [
    {
      icon: <Users size={24} />,
      title: "Grow Your Business",
      description: "Connect with homeowners actively looking for your services in your local area.",
    },
    {
      icon: <Calendar size={24} />,
      title: "Smart Scheduling",
      description: "Manage your appointments and schedule with our intuitive calendar system.",
    },
    {
      icon: <DollarSign size={24} />,
      title: "Secure Payments",
      description: "Get paid faster with our secure, integrated payment processing system.",
    },
    {
      icon: <Star size={24} />,
      title: "Build Reputation",
      description: "Collect and showcase verified reviews from satisfied customers to build trust.",
    },
    {
      icon: <BarChart size={24} />,
      title: "Business Insights",
      description: "Access detailed analytics to understand your business performance and growth opportunities.",
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Client Communication",
      description: "Streamline communication with clients through our integrated messaging platform.",
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
        title="Grow Your Service Business"
        subtitle="Connect with homeowners who need your services and streamline your business operations with RivoHome's provider platform."
        ctaText="Join as a Provider"
        ctaLink="#"
        image="/placeholder.svg?height=600&width=800"
        imageAlt="Service provider dashboard"
        isReversed={true}
      />

      <FeaturesSection
        title="Powerful Tools for Service Providers"
        subtitle="Everything you need to grow your business and delight your customers."
        features={providerFeatures}
      />

      <CTASection
        title="Ready to expand your service business?"
        subtitle="Join our network of trusted service providers and connect with homeowners in your area."
        ctaText="Apply Now"
        ctaLink="#"
        bgColor="bg-indigo-700"
      />

      <NewsletterSection
        title="Stay Connected"
        subtitle="Subscribe to our newsletter for industry insights and business growth tips."
      />
    </motion.div>
  )
}

