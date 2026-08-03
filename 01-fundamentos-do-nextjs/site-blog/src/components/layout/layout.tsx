import { Inter, PT_Sans_Caption } from "next/font/google";
import Head from "next/head";
import { Footer } from "./footer";
import { Header } from "./header";
import { CallToAction } from "@/templates/landing-page/sections/call-to-action";

type LayoutProps = {
    children: React.ReactNode;
}

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    weight: ["400", "500"]
})

const ptSansCaption = PT_Sans_Caption({
    variable: "--font-sans",
    subsets: ["latin"],
    weight: "700"
})

export function Layout({ children }: LayoutProps) {
    return (
        <div className={`${inter.variable} ${ptSansCaption.variable} font-inter relative flex min-h-screen flex-col dark`}>
            <Head>
                <title>Site.Set - Landing Page e Blog</title>
            </Head>
            <Header />
            <main className="flex-1 flex flex-col mt-32">
                {children}
            </main>
            <CallToAction />
            <Footer />
        </div>
    )
}