"use client"

import { motion } from "framer-motion"
import NewsletterForm from "./newsletter-form"

interface NewsletterSectionProps {
  title: string
  subtitle: string
}

export default function NewsletterSection({ title, subtitle }: NewsletterSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-xl text-gray-500 mb-8">{subtitle}</p>
          <NewsletterForm />
        </motion.div>
      </div>
    </section>
  )
}

