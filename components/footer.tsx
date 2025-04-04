"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-indigo-600">Rivo</span>
              <span className="text-2xl font-bold text-gray-900">Home</span>
            </div>
            <p className="text-gray-500">Smart home maintenance management for homeowners and service providers.</p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={20} />} href="https://facebook.com" label="Facebook" />
              <SocialIcon icon={<Twitter size={20} />} href="https://twitter.com" label="Twitter" />
              <SocialIcon icon={<Instagram size={20} />} href="https://instagram.com" label="Instagram" />
              <SocialIcon icon={<Linkedin size={20} />} href="https://linkedin.com" label="LinkedIn" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Pages</h3>
            <ul className="space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/providers">For Service Providers</FooterLink>
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
              <FooterLink href="#">Cookie Policy</FooterLink>
              <FooterLink href="#">GDPR</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                <span className="text-gray-500">contact@rivohome.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                <span className="text-gray-500">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                <span className="text-gray-500">
                  123 Smart Home Ave
                  <br />
                  San Francisco, CA 94107
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">&copy; {currentYear} RivoHome. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm border border-gray-200 text-gray-500 hover:text-indigo-600 hover:border-indigo-600 transition-colors"
      aria-label={label}
    >
      {icon}
    </motion.a>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-gray-500 hover:text-indigo-600 transition-colors">
        {children}
      </Link>
    </li>
  )
}

