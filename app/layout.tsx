import type { Metadata } from "next";
import { Inter, Space_Grotesk, Fira_Code, Manrope, Cedarville_Cursive } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: 'swap',
});

const firaCode = Fira_Code({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: 'swap',
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: 'swap',
});

const cursive = Cedarville_Cursive({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cursive",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Pon Parthasarathy | Portfolio",
  description: "Full Stack Software Engineer | AI / ML Developer specialized in intelligent systems and modern digital experiences.",
  keywords: ["Pon Parthasarathy", "Full Stack Engineer", "AI Developer", "ML Engineer", "Software Developer Portfolio", "Next.js", "React", "TypeScript"],
  authors: [{ name: "Pon Parthasarathy" }],
  openGraph: {
    title: "Pon Parthasarathy | Portfolio",
    description: "Full Stack Software Engineer | AI / ML Developer specialized in intelligent systems and modern digital experiences.",
    url: "https://your-portfolio-domain.com",
    siteName: "Pon Parthasarathy Portfolio",
    images: [
      {
        url: "/og-image.png", // User should provide this eventually
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pon Parthasarathy | Portfolio",
    description: "Full Stack Software Engineer | AI / ML Developer",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

import ContentWrapper from "@/components/ContentWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${firaCode.variable} ${manrope.variable} ${cursive.variable} font-fira-code antialiased bg-[#0A0B10] text-[#E2E8F0] overflow-x-hidden md:cursor-none`}
      >
        <ContentWrapper>
          {children}
        </ContentWrapper>
      </body>
    </html>
  );
}
