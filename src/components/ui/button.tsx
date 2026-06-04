import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { forwardRef } from 'react'

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium select-none',
    'transition-colors duration-150',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
  ].join(' '),
  {
    variants: {
      variant: {
        // Light-zone buttons
        default:         'rounded-btn bg-charcoal text-white hover:bg-charcoal-soft active:bg-charcoal',
        copper:          'rounded-btn bg-copper text-white hover:bg-copper-dark active:bg-copper-dark shadow-copper-sm',
        secondary:       'rounded-btn bg-copper-soft text-copper-dark hover:bg-copper-border',
        outline:         'rounded-btn border border-hairline bg-transparent text-ink hover:bg-surface-soft',
        'outline-copper':'rounded-btn border border-copper text-copper bg-transparent hover:bg-copper-soft',
        ghost:           'rounded-btn bg-transparent text-ink hover:bg-surface-soft',
        destructive:     'rounded-btn bg-danger text-white hover:bg-red-700',
        link:            'bg-transparent text-copper underline-offset-4 hover:underline h-auto p-0',
        muted:           'rounded-btn bg-surface-soft text-ink-muted hover:bg-hairline hover:text-ink',
        // Dark-zone buttons (header band, footer)
        'ghost-dark':    'rounded-btn text-white/80 hover:text-white hover:bg-white/10',
      },
      size: {
        xs:        'h-7 px-2.5 text-xs',
        sm:        'h-8 px-3 text-sm',
        md:        'h-10 px-4 text-sm',
        lg:        'h-12 px-6 text-base',
        xl:        'h-14 px-8 text-base',
        icon:      'h-10 w-10 rounded-btn p-0 shrink-0',
        'icon-sm': 'h-8 w-8 rounded-btn p-0 shrink-0',
      },
    },
    defaultVariants: { variant: 'default', size: 'md' },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, disabled, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
      {children}
    </button>
  )
)
Button.displayName = 'Button'

export { Button, buttonVariants }
