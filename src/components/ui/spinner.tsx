import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

interface SpinnerProps {
  className?: string
  size?: 'xs' | 'sm' | 'md' | 'lg'
}

const sizeMap = {
  xs: 'h-3 w-3',
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-7 w-7',
}

function Spinner({ className, size = 'md' }: SpinnerProps) {
  return (
    <Loader2
      className={cn('animate-spin text-primary', sizeMap[size], className)}
      aria-label="Loading"
    />
  )
}

export { Spinner }
