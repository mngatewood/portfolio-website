import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// TODO: Description

export const metadata: Metadata = {
  title: "Michael N. Gatewood",
  description: "Michael Gatewood's professional portfolio.",
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
		<ThemeProvider
		  attribute="class"
		  defaultTheme="dark"
		  enableSystem
		  disableTransitionOnChange
		>
		  {children}
		</ThemeProvider>
	  </body>
	</html>
  );
}
