import Link from "next/link";
import { Logo } from "./logo";

export function Footer() {
    return (
        <footer className="bg-gray-500">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-row gap-8 py-8 justify-between">
                    <Logo />

                    <nav className="flex flex-col md:flex-row items-start md:items-center gap-4 text-body-sm [&>a]:text-blue-100 [&>a]:hover:text-blue-200">
                        <Link href="/termos-de-uso">Termos de uso</Link>
                        <Link href="/politica-de-privacidade">Politica de Privacidade</Link>
                        <Link href="/feedback">Enviar feedback</Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
}