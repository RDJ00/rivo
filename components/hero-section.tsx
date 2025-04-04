"use client"

import { motion } from "framer-motion"

interface HeroSectionProps {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
  image: string
  imageAlt: string
  isReversed?: boolean
}

export default function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaLink,
  image,
  imageAlt,
  isReversed = false,
}: HeroSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container">
        <div
          className={`grid grid-cols-1 gap-12 items-center lg:grid-cols-2 ${isReversed ? "lg:flex-row-reverse" : ""}`}
        >
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
            <motion.h1 variants={itemVariants} className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {title}
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-gray-500 max-w-2xl">
              {subtitle}
            </motion.p>
            <motion.div variants={itemVariants}>
              <motion.a href={ctaLink} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-primary">
                {ctaText}
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`${isReversed ? "lg:order-first" : ""}`}
          >
            <img src={image || "/placeholder.svg"} alt={imageAlt} className="w-full h-auto rounded-lg shadow-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

