import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Venice Beach Dog Walker | Professional Dog Walking Services",
  description: "Real love, real walks, real connection. One-on-one care with Janell—the Venice Beach local who treats your dog like family. Beach days, park play, hikes, meds, cuddles—you name it, your pup's got my full attention.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <main className="min-h-screen bg-[#FFF8E7]">
          {children}
        </main>
      </body>
    </html>
  );
}
