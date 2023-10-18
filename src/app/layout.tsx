import type { Metadata } from "next";
import { Kufam } from "next/font/google";

import { Header } from "@/components/shared";

import "@/styles/globals.scss";
import cn from "./layout.module.scss";

import clsx from "clsx";

// Setting for default font-family
const kufam = Kufam({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ProperLand",
  description: "ProperLand real estate",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <div className={clsx(kufam.className, cn.wrapper)}>
          <Header />
          <main className={cn.main}>{children}</main>
          <footer>footer</footer>
        </div>
      </body>
    </html>
  );
}
