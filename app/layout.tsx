import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
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
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <QueryProvider>
          {/* Dark Base Background */}
          <div className="fixed inset-0 -z-20 bg-black" />

          {/* Fixed Spotlight Background */}
          <div
            className="fixed inset-0 -z-10 pointer-events-none"
            style={{
            background: ` radial-gradient( circle at center, rgba(111, 199, 161, 0.18) 0%, rgba(111, 199, 161, 0.10) 25%, rgba(0, 0, 0, 0) 60% ) `,
            }}
          />

          {/* Main Content */}
          <div className="relative z-10 ">{children}</div>
        </QueryProvider>
      </body>
    </html>
  );
}
