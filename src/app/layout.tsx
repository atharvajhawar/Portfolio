import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import FloatingIcons from "@/components/FloatingIcons";
import AppWrapper from "@/components/AppWrapper";
import CameraBackground from "@/components/CameraBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atharva Jhawar | Software Developer",
  description:
    "Portfolio of Atharva Jhawar — Software Developer with expertise in React, Node.js, Python, and Blockchain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col noise">
        <AppWrapper>
          <CameraBackground />
          <ParticleBackground />
          <FloatingIcons />
          <Navbar />
          <main className="flex-1" style={{ position: "relative", zIndex: 1 }}>{children}</main>
          <Footer />
        </AppWrapper>
      </body>
    </html>
  );
}
