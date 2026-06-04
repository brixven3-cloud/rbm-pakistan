'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { staggerContainer, staggerItem } from '@/lib/motion'

export function HeroSection() {
  return (
    <section className="bg-primary-soft py-12 md:py-20">
      <div className="container-page">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-2xl text-center"
        >
          <motion.h1
            variants={staggerItem}
            className="mb-4 text-3xl font-semibold leading-heading text-navy sm:text-4xl md:text-5xl"
          >
            Find property anywhere in Pakistan
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mb-8 text-base text-ink-muted leading-body sm:text-lg"
          >
            Plots, houses &amp; rentals from verified dealers
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="flex flex-col gap-3 sm:flex-row sm:justify-center"
          >
            <Link
              href="/auth/signup"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-btn bg-primary px-7 text-base font-semibold text-white shadow-primary-md transition-all hover:bg-primary-dark active:bg-primary-700 sm:w-auto"
            >
              Get your free dealer site
              <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
            <Link
              href="/properties"
              className="inline-flex h-12 w-full items-center justify-center text-base font-medium text-primary transition-colors hover:text-primary-dark sm:w-auto"
            >
              Browse listings
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
