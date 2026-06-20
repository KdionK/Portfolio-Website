import { Geist, Geist_Mono } from "next/font/google";
import { Teko } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./_component/Navigation";
import Footer from "./_component/Sections/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const teko = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
});

export const metadata = {
  title: "Karim Dion K.",
  description: "Créateur de jeux video à vos services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${teko.variable} ${inter.variable} antialiased`}>
        <header>
          <Navigation />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
