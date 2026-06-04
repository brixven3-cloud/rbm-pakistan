import { cn } from '@/lib/utils'
import { forwardRef, type ReactNode } from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helper?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helper, leftIcon, rightIcon, id, required, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium text-ink">
            {label}
            {required && (
              <span className="ml-0.5 text-danger" aria-hidden>
                *
              </span>
            )}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-faint">
              {leftIcon}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            required={required}
            aria-invalid={!!error}
            aria-describedby={
              error ? `${inputId}-error` : helper ? `${inputId}-helper` : undefined
            }
            className={cn(
              'w-full rounded-input border bg-surface px-3 py-2.5 text-sm text-ink',
              'placeholder:text-ink-faint transition-colors duration-150',
              'focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary',
              'disabled:cursor-not-allowed disabled:bg-surface-soft disabled:text-ink-muted',
              error
                ? 'border-danger focus:ring-danger focus:border-danger'
                : 'border-hairline hover:border-ink-faint',
              leftIcon && 'pl-9',
              rightIcon && 'pr-9',
              className
            )}
            {...props}
          />
          {rightIcon && (
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-faint">
              {rightIcon}
            </span>
          )}
        </div>
        {error && (
          <p id={`${inputId}-error`} role="alert" className="text-xs text-danger">
            {error}
          </p>
        )}
        {helper && !error && (
          <p id={`${inputId}-helper`} className="text-xs text-ink-muted">
            {helper}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
