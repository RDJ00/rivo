"use client"

import type React from "react"

import { BrowserRouter as Router } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Router>
      <AnimatePresence mode="wait">{children}</AnimatePresence>
    </Router>
  )
}

