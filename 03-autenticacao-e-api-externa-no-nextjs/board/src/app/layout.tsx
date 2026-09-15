import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';
import { NuqsAdapter } from "nuqs/adapters/next/app";

const interFont = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: "%s | Product Roadmap",
    default: "Product Roadmap",
  },
  description: "Follow the development progress of our entire platform.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={interFont.className}>
      <body className="bg-navy-950 text-navy-50 antialiased">
        <NuqsAdapter>
          {children}
        </NuqsAdapter>
      </body>
    </html>
  );
}
