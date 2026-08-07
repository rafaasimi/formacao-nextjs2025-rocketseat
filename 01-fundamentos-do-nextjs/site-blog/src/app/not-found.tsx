import { buttonVariants } from "@/components/ui/button";
import { FileQuestion, Home, Search } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-[calc(100vh-6.5rem)] md:min-h-[calc(100vh-8rem)] flex items-center justify-center px-4">
            <div className="container flex flex-col items-center justify-center gap-6 md:gap-8 text-center">
                <div className="flex items-center gap-3 md:gap-4">
                    <div className="flex items-center justify-center p-4 rounded-full bg-cyan-300 text-cyan-100 w-fit">
                        <FileQuestion className="w-8 h-8 md:w-10 md:h-10" />
                    </div>

                    <h1 className="text-gray-100 text-heading-hg md:text-[64px] leading-none">404</h1>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <h2 className="text-gray-100 text-heading-lg md:text-heading-xl text-balance">Página não encontrada</h2>
                    <p className="text-gray-300 text-body-sm md:text-body-md max-w-md text-balance">
                        Ops! Não conseguimos encontrar a página que você procura.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/" className={buttonVariants({ variant: "primary", size: "md" })}>
                        Voltar para a home
                    </Link>

                    <Link href="/blog?q=" className={buttonVariants({ variant: "secondary", size: "md" })}>
                        Pesquisar posts
                        <Search />
                    </Link>
                </div>
            </div>
        </div>
    )
}
