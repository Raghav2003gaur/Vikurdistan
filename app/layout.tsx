import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ResponsiveNavbar from "@/components/Home/Navbar/ResponsiveNavbar";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "@/components/Home/Footer/Footer";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
// Setup task
// Customize your font { watch the video }
// Customize your meta data

export const metadata: Metadata = {
  title: "VIKurdistan",
  description: "Travel Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <ResponsiveNavbar />
        {children}
        <a
          href="https://wa.me/9647762143322"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="h-7 w-7" />
        </a>
        <Footer />
      </body>
    </html>
  );
}
