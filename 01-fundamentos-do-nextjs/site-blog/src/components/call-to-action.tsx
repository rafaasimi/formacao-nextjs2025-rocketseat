import { ArrowRight, Store } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export function CallToAction() {
    return (
        <section className="relative bg-[url('/call-to-action-section.svg')] bg-cover bg-top">
            <div className="container py-14 md:py-22 flex flex-col items-center gap-8 md:gap-10">
                <div className="absolute top-0 transform translate-y-[-50%] flex items-center justify-center p-3.5 md:p-4 rounded-full bg-cyan-300 text-cyan-100 w-fit">
                    <Store className="w-7 md:w-8 h-7 md:h-8"/>
                </div>

                <h2 className="text-gray-100 text-heading-md md:text-heading-xl max-w-113 text-center text-balance">Crie uma loja online e inicie suas vendas ainda hoje</h2>

                <Link href="/criar-loja" className={buttonVariants({ variant: "primary", size: "md" })}>
                    Criar loja grátis
                    <ArrowRight />
                </Link>
            </div>
        </section>
    )
}