"use client"

import { motion } from "framer-motion"

interface CTASectionProps {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
  bgColor?: string
}

export default function CTASection({ title, subtitle, ctaText, ctaLink, bgColor = "bg-indigo-600" }: CTASectionProps) {
  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 text-xl text-indigo-100">{subtitle}</p>
          <div className="mt-8">
            <motion.a
              href={ctaLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-indigo-600 bg-white border border-transparent rounded-md shadow-sm hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-indigo-600 transition-all duration-200"
            >
              {ctaText}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

