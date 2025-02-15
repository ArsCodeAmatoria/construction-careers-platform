import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t py-6 w-full">
      <div className="w-full flex flex-col items-center justify-center space-y-4">
        <Link 
          href="https://bigfootcrane.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <Image
            src="/bflogo.png"
            alt="Bigfoot Crane Company"
            width={120}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </Link>
        <div className="text-center text-sm text-muted-foreground space-y-2">
          <p>
            <Link 
              href="https://embersstaffing.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              © 2025 Embers Staffing
            </Link>
          </p>
          <p>Built by Bigfoot Crane Academy</p>
        </div>
      </div>
    </footer>
  )
} 