import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/footer";
import { ChatButton } from "@/components/ai/chat-button"

// Use a single Geist font instance
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ConstructTech Careers",
  description: "Explore modern careers in construction technology"
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
        <Footer />
        <ChatButton />
      </body>
    </html>
  );
}
