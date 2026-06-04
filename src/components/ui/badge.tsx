import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-pill font-medium ring-1 ring-inset',
  {
    variants: {
      variant: {
        default: 'bg-surface-2 text-ink-muted ring-hairline',
        // Copper badge — Featured, Hot Sale, premium labels
        copper:  'bg-copper/15 text-copper ring-copper/30',
        // Brand badge — Verified (uses gradient)
        brand:   'bg-accent-grad text-white ring-transparent',
        success: 'bg-success/15 text-success ring-success/30',
        warning: 'bg-warning/15 text-warning ring-warning/30',
        danger:  'bg-danger/15 text-danger ring-danger/30',
        info:    'bg-blue-500/15 text-blue-400 ring-blue-500/30',
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
  copper:  'bg-copper',
  success: 'bg-success',
  warning: 'bg-warning',
  danger:  'bg-danger',
  info:    'bg-blue-400',
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
