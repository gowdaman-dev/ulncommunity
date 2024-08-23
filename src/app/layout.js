import { Poppins } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/user-components/common/NavigationBar";
import { icons } from "lucide-react";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "ulncommunity",
  description: "",
  icons: "/favicon.png"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
