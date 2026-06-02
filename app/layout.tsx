import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "先鋒工程指南",
  description: "童軍先鋒工程參考工具",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-HK">
      <body>{children}</body>
    </html>
  );
}
