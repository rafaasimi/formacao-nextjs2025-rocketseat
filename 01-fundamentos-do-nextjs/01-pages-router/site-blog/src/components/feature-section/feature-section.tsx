import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function FeatureSection() {
  return (
    <section className="container bg-gray-700 grid gap-6 md:grid-cols-2 pb-8 pt-8 md:py-10">
      <div className="flex flex-col gap-4 bg-gray-500 rounded-xl p-12">
        <span className="text-body-tag text-blue-200 bg-blue-400 py-[6px] px-3 w-fit rounded-sm uppercase">
          Simples
        </span>
        <h2 className="text-heading-lg text-gray-100">
          Crie um catálogo de produtos online em poucos minutos
        </h2>
      </div>

      <div className="flex flex-col gap-4 bg-gray-500 rounded-xl p-12">
        <span className="text-body-tag text-blue-200 bg-blue-400 py-[6px] px-3 w-fit rounded-sm uppercase">
          Prático
        </span>
        <h2 className="text-heading-lg text-gray-100">
          Venda para seu público através de uma plataforma única
        </h2>
      </div>

      <div className="col-span-full flex flex-col gap-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4 rounded-lg bg-gray-500 p-6 md:p-12">
          <div className="flex flex-col gap-4">
            <span className="text-body-tag text-blue-200 bg-blue-400 py-[6px] px-3 w-fit rounded-sm uppercase">
              Personalizável
            </span>
            <h2 className="text-heading-lg text-gray-100">
              Tenha uma loja online personalizada com a cara da sua marca
            </h2>

            <Button
              asChild
              className="rounded-full hidden mt-4 md:mt-auto md:flex md:w-fit"
            >
              <Link href="/criar-loja">
                Criar loja grátis <ArrowRight />
              </Link>
            </Button>
          </div>

          <div className="flex flex-col items-center justify-center w-full">
            <div className="w-full max-w-md overflow-hidden">
              <Image
                src="/feature-section.svg"
                alt=""
                width={440}
                height={337}
                className="object-cover w-full"
              />
            </div>

            <Button
              asChild
              className="rounded-full gap-2 w-full md:hidden mt-4 md:mt-auto"
            >
              <Link href="/criar-loja">
                Criar loja grátis <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
