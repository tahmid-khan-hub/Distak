import type { Metadata } from "next";
import { Inter, Lobster_Two, Poppins } from "next/font/google";
import "./globals.css";
import QueryProvider from "./QueryProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lobsterTwo = Lobster_Two({
  variable: "--font-lobster-two",
  subsets: ["latin"],
  weight: ["400", "700"],
});


export const metadata: Metadata = {
  title: "Distak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} ${lobsterTwo.variable} antialiased`}>
        <QueryProvider>
          {/* Dark Base Background */}
          <div className="fixed inset-0 -z-20 bg-black" />

          {/* Main Content */}
          <div className="relative z-10 ">{children}</div>
        </QueryProvider>
      </body>
    </html>
  );
}
