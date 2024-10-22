import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen  font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="md:w-full md:flex md:items-center md:justify-center py-3 mx-auto">
              <span className="text-xs">Designed & Developed by&nbsp;</span>
              <Link
                className="flex items-center justify-center gap-1 text-xs text-pink-500 font-medium"
                href="https://www.catherine-siller.com/"
                isExternal
                title="Catherine Siller portfolio"
              >
                Catherine Siller (Me)
              </Link>
              <span className="max-md:hidden md:block text-xs">
                &nbsp; | &nbsp;
              </span>
              <span className="block text-center text-xs">
                Powered by&nbsp;
              </span>
              <Link
                className="flex items-center justify-center gap-1 text-xs text-pink-500 font-medium"
                href="https://nextui.org/"
                isExternal
                title="nextui.org homepage"
              >
                NextUI
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
