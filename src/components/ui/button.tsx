import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { forwardRef } from 'react'

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium select-none',
    'transition-colors duration-150',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 focus-visible:ring-offset-canvas',
    'disabled:pointer-events-none disabled:opacity-40',
  ].join(' '),
  {
    variants: {
      variant: {
        // Primary: copper-red gradient
        accent:      'rounded-btn bg-accent-grad text-white shadow-copper-sm hover:shadow-copper-md',
        // Subtle dark surface button
        default:     'rounded-btn bg-surface-2 text-white border border-hairline hover:bg-surface-soft',
        // Secondary: copper tint
        secondary:   'rounded-btn bg-copper/15 text-copper border border-copper/30 hover:bg-copper/20',
        outline:     'rounded-btn border border-hairline text-ink-muted hover:text-white hover:bg-surface-soft',
        ghost:       'rounded-btn text-ink-muted hover:text-white hover:bg-surface-2',
        destructive: 'rounded-btn bg-danger text-white hover:bg-red-700',
        link:        'text-copper underline-offset-4 hover:underline h-auto p-0',
        muted:       'rounded-btn bg-surface text-ink-muted hover:bg-surface-soft hover:text-white',
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
    defaultVariants: { variant: 'accent', size: 'md' },
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
