import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileNav from "@/components/layout/MobileNav";
import StarField from "@/components/shared/StarField";

const notoSerifJp = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "恋愛占いラボ | 無料タロット・恋愛運・相性診断",
    template: "%s | 恋愛占いラボ",
  },
  description:
    "恋愛攻略研究家タケシ監修の無料恋愛占い。タロットであの人の気持ちを読み解き、恋愛運・相性診断で恋の行方を占います。",
  keywords: [
    "恋愛占い",
    "無料",
    "タロット占い",
    "あの人の気持ち",
    "相性診断",
    "恋愛運",
    "片思い",
    "復縁",
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "恋愛占いラボ",
    title: "恋愛占いラボ | 無料タロット・恋愛運・相性診断",
    description:
      "恋愛攻略研究家タケシ監修。タロットであの人の気持ちを読み解く無料恋愛占い。",
  },
  twitter: {
    card: "summary_large_image",
    title: "恋愛占いラボ | 無料タロット・恋愛運・相性診断",
    description: "恋愛攻略研究家タケシ監修の無料恋愛占い。あの人の気持ち、恋の行方を占おう。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSerifJp.variable} antialiased`}>
        <StarField />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <MobileNav />
        </div>
      </body>
    </html>
  );
}
