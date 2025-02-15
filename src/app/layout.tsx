import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import Link from "next/link";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "ConstructTech Careers",
  description: "Explore modern careers in construction technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} font-sans`}>
        <Header />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="border-t py-6 md:py-0">
          <div className="container flex flex-col items-center gap-4 md:h-16 md:flex-row md:justify-between">
            <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
              <Link 
                href="https://embersstaffing.com/"
                className="text-sm text-muted-foreground hover:underline"
              >
                © 2025 Embers Staffing
              </Link>
            </div>
            <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
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
      </body>
    </html>
  );
}
