import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-8">The page you are looking for does not exist.</p>
      <Link
        href="/"
        className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition-colors"
      >
        Go back home
      </Link>
    </div>
  )
}
