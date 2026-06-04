import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helper?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helper, id, required, ...props }, ref) => {
    const textareaId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label htmlFor={textareaId} className="block text-sm font-medium text-ink">
            {label}
            {required && (
              <span className="ml-0.5 text-danger" aria-hidden>
                *
              </span>
            )}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          required={required}
          aria-invalid={!!error}
          className={cn(
            'w-full resize-y rounded-input border bg-surface px-3 py-2.5 text-sm text-ink',
            'min-h-[96px] placeholder:text-ink-faint transition-colors duration-150',
            'focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary',
            'disabled:cursor-not-allowed disabled:bg-surface-soft',
            error
              ? 'border-danger focus:ring-danger focus:border-danger'
              : 'border-hairline hover:border-ink-faint',
            className
          )}
          {...props}
        />
        {error && (
          <p role="alert" className="text-xs text-danger">
            {error}
          </p>
        )}
        {helper && !error && <p className="text-xs text-ink-muted">{helper}</p>}
      </div>
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }
