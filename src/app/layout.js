import "./globals.css";
import Navbar from "@/app/components/Navbar";
import { Mulish } from 'next/font/google' ;
const mulish = Mulish({
  weight: ['900','600'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Daichiflix Archives",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mulish.className}>

    <body className="bg-black overflow-scroll scroll-smooth" >
      <Navbar />
      {children}
      </body>
    </html>
  );
}
