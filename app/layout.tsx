import type { Metadata } from "next";
import { DotGothic16 } from "next/font/google";
import "./globals.css";
import Footer from "./component/base/Footer/Footer";

const dotGothic16 = DotGothic16({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body className={dotGothic16.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
