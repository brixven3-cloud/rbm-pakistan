import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { forwardRef } from 'react'

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium select-none',
    'transition-colors duration-150',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
  ].join(' '),
  {
    variants: {
      variant: {
        default:
          'rounded-btn bg-primary text-white hover:bg-primary-dark active:bg-primary-700 shadow-primary-sm',
        secondary:
          'rounded-btn bg-primary-soft text-primary-600 hover:bg-primary-100 active:bg-primary-200',
        outline:
          'rounded-btn border border-primary bg-transparent text-primary hover:bg-primary-soft active:bg-primary-100',
        ghost: 'rounded-btn bg-transparent text-primary hover:bg-primary-soft',
        navy:  'rounded-btn bg-navy text-white hover:bg-navy-soft active:bg-navy-800',
        destructive: 'rounded-btn bg-danger text-white hover:bg-red-700',
        muted: 'rounded-btn bg-surface-soft text-ink-muted hover:bg-hairline hover:text-ink',
        link:  'bg-transparent text-primary underline-offset-4 hover:underline h-auto p-0',
      },
      size: {
        xs:       'h-7 px-2.5 text-xs',
        sm:       'h-8 px-3 text-sm',
        md:       'h-10 px-4 text-sm',
        lg:       'h-12 px-6 text-base',
        xl:       'h-14 px-8 text-base',
        icon:     'h-10 w-10 rounded-btn p-0 shrink-0',
        'icon-sm':'h-8 w-8 rounded-btn p-0 shrink-0',
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
