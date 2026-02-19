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
          {/* Background Wrapper */}
          <div className="min-h-screen w-full relative">
            {/* Emerald Void Background */}
            <div
              className="absolute inset-0 -z-10"
              style={{
                background: "radial-gradient(125% 125% at 50% 90%, #000000 40%, #072607 100%)",
              }}
            />
            {/* Content */}
            {children}
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
