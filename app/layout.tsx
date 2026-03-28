import { Navbar } from "@/components/Navbar";
import { CursorGlow } from "@/components/CursorGlow";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { profileData } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profileData.name} | Portfolio`,
  description: profileData.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground selection:bg-brand-blue/30 selection:text-foreground relative">
        <Navbar />
        <CursorGlow />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
