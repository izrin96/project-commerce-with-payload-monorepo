import "./globals.css";
import { Inter } from "next/font/google";
import NextUIProvider from "@/components/providers/NextUIProvider";
import Providers from "@/components/providers/Providers";
import MantineProvider from "@/components/providers/MantineProvider";
import NextThemeProvider from "@/components/providers/ThemeProvider";
import GeistProvider from "@/components/providers/GeistProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <NextThemeProvider>
            <GeistProvider>
              <MantineProvider>
                <NextUIProvider>
                  <div className="min-h-screen selection:bg-[#79ffe1] dark:selection:bg-[#f81ce5]">
                    {children}
                  </div>
                </NextUIProvider>
              </MantineProvider>
            </GeistProvider>
          </NextThemeProvider>
        </Providers>
      </body>
    </html>
  );
}