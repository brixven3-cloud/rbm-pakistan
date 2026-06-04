import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Format PKR amount with South Asian notation: 17,500,000 → "Rs. 1.75 Crore" */
export function formatPrice(amount: number): string {
  if (amount >= 10_000_000) {
    const crore = amount / 10_000_000
    return `Rs. ${crore % 1 === 0 ? crore.toFixed(0) : crore.toFixed(2)} Crore`
  }
  if (amount >= 100_000) {
    const lakh = amount / 100_000
    return `Rs. ${lakh % 1 === 0 ? lakh.toFixed(0) : lakh.toFixed(2)} Lakh`
  }
  return `Rs. ${amount.toLocaleString('en-PK')}`
}

/** Convert text to URL-safe slug: "DHA Phase 5" → "dha-phase-5" */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/** Truncate with ellipsis */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trimEnd() + '…'
}

/** Format area with unit label: (5, 'marla') → "5 Marla" */
export function formatArea(value: number, unit: string): string {
  const labels: Record<string, string> = {
    marla: 'Marla',
    kanal: 'Kanal',
    sqft: 'Sq. Ft.',
    sqyd: 'Sq. Yd.',
  }
  return `${value} ${labels[unit] ?? unit}`
}

/** WhatsApp click-to-chat URL with optional pre-filled message */
export function getWhatsAppUrl(phone: string, message = ''): string {
  const clean = phone.replace(/\D/g, '')
  return `https://wa.me/${clean}${message ? `?text=${encodeURIComponent(message)}` : ''}`
}
