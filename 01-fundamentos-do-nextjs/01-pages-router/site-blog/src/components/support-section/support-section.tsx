import { HeartHandshake, PaintbrushVertical, Store } from "lucide-react";
import { PT_Sans_Caption } from "next/font/google";

const ptSansCaption = PT_Sans_Caption({ subsets: ["latin"], weight: "700" });

export function SupportSection() {
  return (
    <section className=" bg-gradient-to-r from-gray-500 to-gray-700 md:bg-[url(/support-section.svg)] bg-no-repeat bg-center ">
      <div className="container py-12 md:py-[120px]">
        <div className="flex flex-col items-center gap-12">
          <h2
            className={`${ptSansCaption} md:max-w-[488px] text-balance text-center text-heading-xl text-gray-100`}
          >
            Sua loja de afiliados, simples, do jeito que deveria ser
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* CARD 1 */}
            <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-6 bg-blue-400">
              <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-blue-300 mb-4">
                <PaintbrushVertical size={24} className="text-white" />
              </div>
              <strong className="text-heading-sm text-gray-100">
                Personalize seu site
              </strong>
              <p className="text-body-sm text-gray-200">
                Adicione sua logo, favicon, cores no seu catalago e tenha tudo
                com a sua cara.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-6 bg-cyan-300">
              <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-cyan-200 mb-4">
                <Store size={24} className="text-white" />
              </div>
              <strong className="text-heading-sm text-gray-100">
                Venda de qualquer loja
              </strong>
              <p className="text-body-sm text-gray-200">
                Não importa a loja, o Site.Set permite que você insera qualquer
                link de afiliado.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-6 bg-blue-400">
              <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-blue-300 mb-4">
                <HeartHandshake size={24} className="text-white" />
              </div>
              <strong className="text-heading-sm text-gray-100">
                Receba suporte amigável
              </strong>
              <p className="text-body-sm text-gray-200">
                Nossa equipe estará sempre pronta para te atender para ajudar no
                que for preciso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
