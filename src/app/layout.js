import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '../components/navbar/Navbar.jsx';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Glife",
  description: "Glife",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}</body>
    </html>
  );
}
