import Image from "next/image";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function FeatureSection() {

    return (
        <section className="container">
            <div className="grid grid-cols-1 gap-3  md:grid-cols-2 md:gap-6">

                <div className="bg-gray-500 p-6 md:p-12 rounded-xl flex flex-col gap-3 md:gap-4">
                    <Badge className="w-fit">Simples</Badge>
                    <h2 className="text-gray-100 text-heading-lg text-balance">Crie um catálogo de produtos online em poucos minutos</h2>
                </div>

                <div className="bg-gray-500 p-6 md:p-12 rounded-xl flex flex-col gap-3 md:gap-4">
                    <Badge className="w-fit">Prático</Badge>
                    <h2 className="text-gray-100 text-heading-lg text-balance">Venda para seu público através de uma plataforma única</h2>
                </div>

                <div className="bg-gray-500 p-6 md:p-12 rounded-xl md:col-span-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-22">
                    <div className="flex flex-col gap-3 md:gap-4">
                        <Badge className="w-fit">Personalizável</Badge>
                        <h2 className="text-gray-100 text-heading-lg text-balance">Tenha uma loja online personalizada com a cara da sua marca</h2>

                        <div className="mt-auto w-fit hidden md:flex">
                            <Link href="/criar-loja" className={buttonVariants({ variant: "primary", size: "md" })}>
                                Criar loja grátis
                                <ArrowRight />
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        <Image
                            src="/feature-section.svg"
                            alt="Ilustração com ícones de sacola, casa e guarda-chuva."
                            width={440}
                            height={327}
                            className="object-contain w-full"
                        />

                        <div className="md:hidden">
                            <Link href="/criar-loja" className={`w-full ${buttonVariants({ variant: "primary", size: "md" })}`}>
                                Criar loja grátis
                                <ArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}