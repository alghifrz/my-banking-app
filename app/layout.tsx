import type { Metadata } from "next";
import { Nunito_Sans, Rajdhani } from "next/font/google";
import "./globals.css";

const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["800", "900", "1000"],
  variable: "--font-nunito_sans",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  display: "swap",    
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
});

export const metadata: Metadata = {
  title: "mPitih",
  description: "mPitih is a platform for managing your finances.",
  icons: {
    icon: [
      {
        url: "/icons/logo.png",
        sizes: "64x64",
        type: "image/png"
      }
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito_sans.className} ${rajdhani.className}`}>
      <head>
        
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
