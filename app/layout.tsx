import "./globals.css";
import "./output.css";
import { Italiana, Open_Sans } from "@next/font/google";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const italiana = Italiana({
  subsets: ["latin"],
  weight: "400",
  variable: "--titulo-font",
});
const openSans = Open_Sans({ subsets: ["latin"], variable: "--texto-font" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${italiana.variable} ${openSans.variable}`}>
      <head />

      <body className="bg-white">
        <Navbar />
        {children}
      </body>
      <Footer />
    </html>
  );
}
