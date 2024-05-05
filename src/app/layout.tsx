import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "900", "500", "600", "800", "200", "300", "100"],
});

export const metadata: Metadata = {
  title: "Ulnlabs",
  description: `ULNLabs: Full-stack web development that delivers stunning design, seamless functionality,
  and measurable results.  Harnessing the power of Node.js, React, Next.js, and more, let's elevate your online presence.`,
  icons: {
    icon: "/fav.png",
    shortcut: "/fav.png",
    apple: "/fav.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
