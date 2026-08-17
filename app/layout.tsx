import type { Metadata, Viewport } from "next";
import { /*Geist, Geist_Mono,*/ Montserrat } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dra. Renata Nakamura",
  description: "Planejamento individualizado, tecnologia digital e um atendimento acolhedor para transformar seu sorriso com segurança, conforto e resultados que fazem sentido para você",
  openGraph: {
    title: "Dra. Renata Nakamura",
    description: "Planejamento individualizado, tecnologia digital e um atendimento acolhedor para transformar seu sorriso com segurança, conforto e resultados que fazem sentido para você",
    images: [{
      width: 731,
      height: 415,
      url: "/assets/og-image.png",
    }],
  }
}

export const viewport: Viewport = {
  themeColor: '#2c4c64',  // blue-dark
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
