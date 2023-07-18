// Import Components
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

// styles
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// fonts
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

// custom redux provider
import { ReduxProvider } from "@/redux/provider";

// meta data
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
        <ReduxProvider>
          {children}
        </ReduxProvider>
        <Footer />
      </body>
    </html>
  );
}
