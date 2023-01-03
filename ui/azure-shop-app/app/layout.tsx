import { Header } from "@/components/header";
import { Inter } from "@next/font/google";
import "./globals.css";
import { ShopProvider } from "./shop/shop-context";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-slate-900 text-slate-100">
        <ShopProvider>
          <div className={`max-w-7xl mx-auto px-3 ${inter.className}`}>
            <Header />
            {children}
          </div>
        </ShopProvider>
      </body>
    </html>
  );
}
