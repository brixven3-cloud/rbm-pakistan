import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-pill font-medium ring-1 ring-inset',
  {
    variants: {
      variant: {
        default: 'bg-surface-soft text-ink-muted ring-hairline',
        // Black badge — for "Verified", important labels on light bg
        brand:   'bg-black text-white ring-black/10',
        // Gold — ONLY for "Featured" / "Hot Sale" / "Verified" premium badges
        gold:    'bg-gold-soft text-gold-dark ring-gold/30',
        success: 'bg-success-soft text-success ring-green-200',
        warning: 'bg-warning-soft text-warning ring-amber-200',
        danger:  'bg-danger-soft text-danger ring-red-200',
        info:    'bg-blue-50 text-blue-700 ring-blue-200',
        outline: 'bg-transparent text-ink-muted ring-hairline',
      },
      size: {
        sm: 'px-2 py-0.5 text-2xs',
        md: 'px-2.5 py-0.5 text-xs',
        lg: 'px-3 py-1 text-xs',
      },
    },
    defaultVariants: { variant: 'default', size: 'md' },
  }
)

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean
}

const dotColors: Record<string, string> = {
  brand:   'bg-white/80',
  gold:    'bg-gold',
  success: 'bg-success',
  warning: 'bg-warning',
  danger:  'bg-danger',
  info:    'bg-blue-500',
  default: 'bg-ink-faint',
  outline: 'bg-ink-faint',
}

function Badge({ className, variant = 'default', size, dot, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {dot && (
        <span
          className={cn('h-1.5 w-1.5 shrink-0 rounded-full', dotColors[variant ?? 'default'])}
          aria-hidden
        />
      )}
      {children}
    </span>
  )
}

export { Badge, badgeVariants }
export type { BadgeProps }
