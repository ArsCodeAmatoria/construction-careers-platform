import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t py-6 w-full">
      <div className="w-full flex flex-col items-center justify-center text-center space-y-2">
        <Link 
          href="https://embersstaffing.com/"
          className="text-sm text-muted-foreground hover:underline"
        >
          © {new Date().getFullYear()} Embers Staffing
        </Link>
        <div className="flex items-center justify-center gap-2">
          <span className="text-sm text-muted-foreground">Built by</span>
          <Link 
            href="https://bigfootcrane.com/"
            className="text-sm text-muted-foreground hover:underline"
          >
            Bigfoot Crane
          </Link>
        </div>
      </div>
    </footer>
  )
} 