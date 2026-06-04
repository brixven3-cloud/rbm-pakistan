import { cn } from '@/lib/utils'

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  circle?: boolean
}

function Skeleton({ className, circle, ...props }: SkeletonProps) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn(
        'animate-pulse bg-surface-soft',
        circle ? 'rounded-full' : 'rounded-input',
        className
      )}
      {...props}
    />
  )
}

function SkeletonText({ lines = 3, className }: { lines?: number; className?: string }) {
  return (
    <div className={cn('space-y-2', className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} className="h-4" style={{ width: i === lines - 1 ? '60%' : '100%' }} />
      ))}
    </div>
  )
}

function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={cn('rounded-card border border-hairline p-5 space-y-3', className)}>
      <Skeleton className="h-40 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-4 w-1/3" />
    </div>
  )
}

export { Skeleton, SkeletonText, SkeletonCard }
