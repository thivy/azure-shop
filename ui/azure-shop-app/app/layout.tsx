import { Container } from "@components/container/container";
import { Header } from "@components/header";
import { Providers } from "@features/app/provider/provider";
import { uiDebug } from "@features/settings";
import { Inter } from "@next/font/google";
import "../features/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

interface IProp {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IProp) {
  return (
    <html lang="en">
      <head />
      <body
        className={`bg-slate-900 text-slate-100 overflow-y-scroll  ${uiDebug(
          false
        )}`}
      >
        <Providers>
          <Container className={`${inter.className}`}>
            <Header />
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  );
}
