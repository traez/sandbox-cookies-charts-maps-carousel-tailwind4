import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BprogressProvider from "@/lib/BprogressProvider";

export const metadata: Metadata = {
  title: "Sandbox 5",
  description: "Created by Trae Zeeofor",
};

//Sandbox Cookies Charts Maps Carousel Tailwind4

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col justify-center items-center min-h-screen w-full font-trebuchetMs bg-[#b8d2e8]">
        <BprogressProvider>
          <Header />
          <main className="flex-grow h-full w-full max-w-[1440px] bg-white">
            {children}
          </main>
          <Footer />
        </BprogressProvider>
      </body>
    </html>
  );
}
