import "./globals.css";
import { Inter } from "next/font/google";

// Import Components
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home Page",
  description: "Giz projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
