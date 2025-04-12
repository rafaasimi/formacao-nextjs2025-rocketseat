import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight, Store } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-14 md:pb-[4.5rem] md:pt-[5.5rem] bg-[url('/call-to-action.svg')] bg-center">
      <div className="container">
        <div className="flex flex-col items-center gap-10 relative">
          <div className="w-16 h-16 rounded-full bg-cyan-300 flex items-center justify-center -top-[5.5rem] md:-top-[7.5rem] absolute">
            <Store size={32} className="text-cyan-100" />
          </div>

          <h2 className="font-sans text-balance text-heading-xl text-gray-100 text-center max-w-[28.125rem]">
            Crie uma loja online e inicie suas vendas ainda hoje
          </h2>

          <Button className="rounded-full w-fit" variant="primary" asChild>
            <Link href="/criar-loja">
              Criar loja grátis <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
