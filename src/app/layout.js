import { Inter } from "next/font/google";
import "./globals.css";
import PremiumHeader from "./components/Header/PremiumHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "StyleCraft - Premium Ecommerce",
  description: "Modern ecommerce experience with stunning animations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PremiumHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
