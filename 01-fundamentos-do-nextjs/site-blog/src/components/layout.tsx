import { Inter, PT_Sans_Caption } from "next/font/google";
import { Footer } from "./footer";
import { Header } from "./header";

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
            <Header />
            <main className="flex-1 flex flex-col">
                {children}
            </main>
            <Footer />
        </div>
    )
}