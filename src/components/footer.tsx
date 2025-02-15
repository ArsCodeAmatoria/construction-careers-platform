import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center md:order-2 space-x-6">
          <Link 
            href="https://bigfootcrane.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <Image
              src="/bflogo.png"
              alt="Bigfoot Crane Company"
              width={150}
              height={50}
              className="h-auto w-auto"
            />
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-muted-foreground">
            &copy; {new Date().getFullYear()} Bigfoot Crane Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 