import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Fionce — Premium Ürün Vitrini",
    template: "%s | Fionce",
  },
  description:
    "En kaliteli ürünleri keşfedin. Uzman seçimi, dürüst incelemeler ve kapsamlı teknik karşılaştırmalarla doğru ürünü bulun.",
  metadataBase: new URL("https://vitrin.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`h-full ${inter.variable} ${playfair.variable}`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
