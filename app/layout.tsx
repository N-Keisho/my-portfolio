import { DotGothic16 } from "next/font/google";
import "./globals.css";
import Footer from "./component/base/Footer/Footer";
import HeaderTop from "./component/top/HeaderTop/HeaderTop";

const dotGothic16 = DotGothic16({ weight: "400", subsets: ["latin"] });

const siteName = "Keisho Nagae's Portfolio Site";
const description = "ものづくりが大好きな大学3年生，永江恵尚のポートフォリオサイトです．これまでに手掛けた制作物や身に着けたスキルをまとめました．";
const baseUrl = 'https://n-keisho.com';

export const metadata = {
  metadataBase: {
    title: siteName,
    description: description,
    image: `${baseUrl}/logo/logo_white.png`,
  } ,
  title: {
    default: siteName,
    template: "%s - " + siteName,
  },
  description: {
    default: description,
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    site_name: siteName,
    title: siteName,
    description: description,
    image: `${baseUrl}/logo/logo_white.png`,
    cardtype: "summary_large_image",
    images: [
      {
        url: `${baseUrl}/logo/logo_white.png`,
        width: 1020,
        height: 1020,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@KEISHO966",
    title: siteName,
    description: description,
    image: `${baseUrl}/logo/logo_white.png`,
    creator: "@KEISHO966",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body className={dotGothic16.className}>
        <HeaderTop />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
