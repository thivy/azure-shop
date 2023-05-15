import { Container } from "@components/container/container";
import { Header } from "@components/header";
import { Providers } from "@features/app/provider/provider";
import { uiDebug } from "@features/settings";
import { setUniqueIdForUser } from "@features/shop/services/product-service";
import { Inter } from "@next/font/google";
import "../features/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

interface IProp {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IProp) {
  setUniqueIdForUser();
  return (
    <html lang="en">
      <body
        className={`bg-slate-900 text-slate-100 overflow-y-scroll ${
          inter.className
        } ${uiDebug(false)}`}
      >
        <Providers>
          <Container>
            <Header />
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  );
}
