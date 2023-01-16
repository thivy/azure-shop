import { Header } from "@/components/header";
import { Providers } from "@/components/provider/provider";
import { Inter } from "@next/font/google";
import "./globals.css";
import { ShopProvider } from "./shop/shop-context";

const inter = Inter({ subsets: ["latin"] });

interface IProp {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IProp) {
  return (
    <html lang="en">
      <head />
      <body className="bg-slate-900 text-slate-100 overflow-y-scroll">
        <Providers>
          <ShopProvider>
            <div
              className={`max-w-7xl min-w-[320px] mx-auto px-3 ${inter.className}`}
            >
              <Header />
              {children}
            </div>
          </ShopProvider>
        </Providers>
      </body>
    </html>
  );
}
