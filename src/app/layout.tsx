import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "What To Eat",
  description:
    "Get random suggestions, user recommendations, and discover top-ranked food spots.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-screen flex-col antialiased`}
      >
        <nav className="p-6">
          <h1>WhatToEat</h1>
        </nav>

        {children}

        <footer className="p-6">
          <p className="text-center text-xs">
            © 2023 What To Eat | RCB Software LLC
          </p>
        </footer>
      </body>
    </html>
  );
}
