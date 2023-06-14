import "./globals.css";
import { Markazi_Text } from "next/font/google";
import { Karla } from "next/font/google";
import Navbar from "./components/navbar/navbar";

export const metadata = {
  title: "Little Lemon",
  description: "Mediterranean Restaurant",
};

const markazi = Markazi_Text({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-markazi",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-karla",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${markazi.variable} ${karla.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
