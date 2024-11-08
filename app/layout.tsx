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

export const metadata: Metadata = {
	title: "Michael N. Gatewood",
	description: "Michael Gatewood's professional portfolio. Michael Gatewood's professional portfolio.  Includes skills, projects, testimonials, professional experience, and contact information.",
	openGraph: {
		images: [
			{
				alt: "A workspace with a laptop, bookshelf and a frame on the wall with military decorations and photos.",
				width: 1200,
				height: 628,
				url: "/opengraph-image.jpg",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Michael N. Gatewood",
		images: [{ url: "/opengraph-image.jpg" }],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
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
