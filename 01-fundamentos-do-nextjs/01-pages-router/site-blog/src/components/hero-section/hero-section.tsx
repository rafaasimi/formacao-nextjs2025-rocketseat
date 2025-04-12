import { ArrowRight, Clock, Store } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="mt-[calc(96px+32px)] md:mt-24 container relative flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[20rem] md:h-[36rem] items-center">
        <div className="flex flex-col items-center justify-center gap-8 md:items-start">
          <h1 className="font-sans text-gray-100 text-heading-hg text-center md:text-left">
            Venda seus produtos como afiliado em um único lugar
          </h1>

          <div className="flex flex-col items-center justify-center gap-4 md:items-start">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <Clock className="text-cyan-100" size={16} />
                <span className="text-gray-200">
                  Crie o seu site em menos de 5 minutos
                </span>
              </div>

              <div className="flex gap-2 items-center">
                <Store className="text-cyan-100" size={16} />
                <span className="text-gray-200">
                  Acompanhe e otimize seu negócio online
                </span>
              </div>
            </div>

            <div className="text-white flex flex-col gap-4 mt-10 md:mt-14 items-center md:items-start">
              <Button className="rounded-full w-fit" asChild>
                <Link href='/criar-loja'>
                  Criar loja grátis <ArrowRight />
                </Link>
              </Button>
              <p className="text-gray-300 text-body-xs">
                Não precisa de cartão de crédito
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-[20rem] hidden md:h-full order-first md:order-last items-center justify-center md:flex">
          <Image
            src="/hero-section.svg"
            alt=""
            width={471}
            height={491}
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
