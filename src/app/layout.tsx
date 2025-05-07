import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppLogo from "../assets/img/logo.png";
//import "@fontsource/inter";

//const geistSans = Geist({
 // variable: "--font-geist-sans",
 // subsets: ["latin"],
//});

//const geistMono = Geist_Mono({
 // variable: "--font-geist-mono",
 // subsets: ["latin"],
//});

export const metadata: Metadata = {
  title: "Ticket App",
  icons: {
    icon: AppLogo.src,
  },
  description: "Ticket App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        style={{ height: "100vh" }}
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
