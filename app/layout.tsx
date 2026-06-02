"use client";

import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "先鋒工程", href: "/" },
  { name: "繩結種類", href: "/knots" },
  { name: "工具種類", href: "/tools" },
  { name: "竹種類", href: "/bamboo" },
  { name: "個人化", href: "/personal" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="zh-HK">
      <body className="bg-[#02133E] text-white">
        {/* 頂欄 */}
        <nav className="bg-[#02133E] border-b border-white/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center h-16 gap-8">
              <div className="font-bold text-xl">童軍工具庫</div>
              <div className="flex gap-6 text-sm">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`hover:text-white transition-colors ${
                      pathname === item.href ? "text-white font-medium" : "text-white/70"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <div className="flex max-w-7xl mx-auto">
          {/* 左側欄 */}
          <div className="w-64 border-r border-white/20 p-6 hidden md:block">
            <div className="text-sm text-white/60 mb-3">分類</div>
            <div className="space-y-1 text-sm">
              <div className="px-3 py-2 rounded-lg bg-white/10">全部項目</div>
              <div className="px-3 py-2 rounded-lg hover:bg-white/5 cursor-pointer">橋樑類</div>
              <div className="px-3 py-2 rounded-lg hover:bg-white/5 cursor-pointer">塔台類</div>
              <div className="px-3 py-2 rounded-lg hover:bg-white/5 cursor-pointer">其他設施</div>
            </div>
          </div>

          {/* 主內容區 */}
          <div className="flex-1 p-6">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
