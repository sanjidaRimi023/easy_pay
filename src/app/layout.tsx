import type { Metadata } from "next";
import { Outfit,Urbanist } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Easy Pay",
  description: "A secure payment website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${urbanist.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
