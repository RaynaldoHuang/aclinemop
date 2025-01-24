import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ALAT PEL PRAKTIS",
  description: "Solusi inovatif untuk membersihkan rumah Anda dengan lebih efisien dan mudah. Dengan kepala pel yang dapat berputar 360°, alat ini memungkinkan Anda untuk mencapai setiap sudut ruangan, bahkan di bawah tempat-tempat yang sulit dijangkau seperti tempat tidur atau sofa. Menghindari penumpukan debu dan membantu membersihkan rumah Anda tanpa menyisakan kotoran di sudut.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
