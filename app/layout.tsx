import type { Metadata } from "next";
import { Rajdhani, Goldman } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  display: "swap",    
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
});

const goldman = Goldman({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-goldman",
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
    <html lang="en" className={`${rajdhani.variable} ${goldman.variable}`}>
      <head>
        
      </head>
      <body className={`${rajdhani.className}`}>
        {children}
      </body>
    </html>
  );
}
