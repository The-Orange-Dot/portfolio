import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import dynamic from "next/dynamic";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tom Le | Software Developer",
  description:
    "Hi there! My name is Tom. I'm a full-stack developer. I'm passionate about bringing ideas to life through clean, efficient code and thoughtful design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const NavBar = dynamic(() => import("./components/NavBar"));

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          defer
          src="https://umami-xg8c4g40kksoc448ckg048s0.hung-le.com/script.js"
          data-website-id="a0dd8e66-c043-4a63-9c85-496d81674bf8"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="light">
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
