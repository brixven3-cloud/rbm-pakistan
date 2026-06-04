import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-page px-4 text-center">
      <div className="mb-4 text-8xl font-bold text-surface-soft select-none">404</div>
      <h1 className="mb-2 text-2xl font-semibold text-navy">Page not found</h1>
      <p className="mb-8 max-w-sm text-sm text-ink-muted leading-body">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>
      <Link
        href="/"
        className="inline-flex h-10 items-center rounded-btn bg-primary px-6 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
      >
        Back to home
      </Link>
    </div>
  )
}
