import { Poppins } from "next/font/google";
import "@/styles/globals.css";

import Header from "./Header";
import Footer from "./Footer";

const poppins = Poppins({
  weight: ['200', '400', '700'],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata = {
  title: "WVSU BINHI",
  description: "The Business Incubator Nurturing Homegrown Innovations (BINHI) website of West Visayas State University (WVSU)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
