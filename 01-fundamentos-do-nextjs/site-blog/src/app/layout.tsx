import { Layout } from "@/components/layout/layout"
import '@/styles/globals.css'
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Site.set",
  description: "Venda seus produtos como afiliado em um único luigar",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Site.set",
    description: "Venda seus produtos como afiliado em um único luigar",
    url: "https://formacao-nextjs2025-rocketseat.vercel.app/og-image.jpg",
    siteName: "Site.set",
    locale: "pt-BR",
    type: "website",
    images: [
      {
        url: "https://formacao-nextjs2025-rocketseat.vercel.app/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Site.set",
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
