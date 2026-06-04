'use client'

import { cn } from '@/lib/utils'
import { scaleIn } from '@/lib/motion'
import { X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface ModalProps {
  open: boolean
  onClose: () => void
  title?: string
  description?: string
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const sizeMap = {
  sm:   'max-w-sm',
  md:   'max-w-md',
  lg:   'max-w-lg',
  xl:   'max-w-2xl',
}

export function Modal({ open, onClose, title, description, children, className, size = 'md' }: ModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    const t = setTimeout(() => closeBtnRef.current?.focus(), 120)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
      clearTimeout(t)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? 'modal-title' : undefined}
          aria-describedby={description ? 'modal-desc' : undefined}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-navy/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
            aria-hidden
          />

          {/* Panel */}
          <motion.div
            className={cn(
              'relative z-10 w-full rounded-card bg-surface shadow-float',
              sizeMap[size],
              className
            )}
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            {(title || description) && (
              <div className="flex items-start gap-4 border-b border-hairline px-6 py-5">
                <div className="flex-1 space-y-0.5">
                  {title && (
                    <h2 id="modal-title" className="text-base font-semibold text-navy">
                      {title}
                    </h2>
                  )}
                  {description && (
                    <p id="modal-desc" className="text-sm text-ink-muted">
                      {description}
                    </p>
                  )}
                </div>
                <button
                  ref={closeBtnRef}
                  onClick={onClose}
                  className="shrink-0 rounded-btn p-1.5 text-ink-faint transition-colors hover:bg-surface-soft hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            )}

            {/* Body */}
            <div className={cn('px-6 pb-6', title || description ? 'pt-5' : 'pt-6')}>
              {!title && !description && (
                <button
                  ref={closeBtnRef}
                  onClick={onClose}
                  className="absolute right-4 top-4 rounded-btn p-1.5 text-ink-faint transition-colors hover:bg-surface-soft hover:text-ink"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
