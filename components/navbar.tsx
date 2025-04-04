"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)

  const isActive = (path: string) => pathname === path

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center">
                <span className="text-2xl font-bold text-indigo-600">Rivo</span>
                <span className="text-2xl font-bold text-gray-900">Home</span>
              </motion.div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <NavLink href="/" isActive={isActive("/")}>
              For Homeowners
            </NavLink>
            <NavLink href="/providers" isActive={isActive("/providers")}>
              For Service Providers
            </NavLink>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-primary">
              Get Started
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="/" isActive={isActive("/")} onClick={toggleMenu}>
              For Homeowners
            </MobileNavLink>
            <MobileNavLink href="/providers" isActive={isActive("/providers")} onClick={toggleMenu}>
              For Service Providers
            </MobileNavLink>
            <div className="pt-4">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full btn-primary">
                Get Started
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

function NavLink({ href, children, isActive }: { href: string; children: React.ReactNode; isActive: boolean }) {
  return (
    <Link href={href} className="relative">
      <span className={`text-base font-medium ${isActive ? "text-indigo-600" : "text-gray-500 hover:text-gray-900"}`}>
        {children}
      </span>
      {isActive && (
        <motion.div
          layoutId="navbar-indicator"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"
          initial={false}
        />
      )}
    </Link>
  )
}

function MobileNavLink({
  href,
  children,
  isActive,
  onClick,
}: { href: string; children: React.ReactNode; isActive: boolean; onClick: () => void }) {
  return (
    <Link
      href={href}
      className={`block px-3 py-2 rounded-md text-base font-medium ${
        isActive ? "bg-indigo-50 text-indigo-600" : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

