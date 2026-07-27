import { HeartHandshake, PaintbrushVertical, Store } from "lucide-react";

export function SupportSection() {
    return (
        <section className="bg-[url('/support-section.svg')] bg-cover bg-center">
            <div className="container flex flex-col items-center gap-8 md:gap-12 py-12 md:py-30">
                <h2 className="text-heading-md md:text-heading-xl text-gray-100 text-center max-w-125 text-balance">Sua loja de afiliados, simples, do jeito que deveria ser</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="flex flex-col items-start p-6 rounded-xl bg-blue-400">
                    <div className="text-white p-2 rounded-lg bg-blue-300 mb-4">
                        <PaintbrushVertical size={20} />
                    </div>
                    <h3 className="text-heading-sm text-gray-100 mb-2">Personalize seu site</h3>
                    <p className="text-body-sm text-gray-200">Adicione sua logo, favicon, cores no seu catálago e tenha tudo com a sua cara.</p>
                </div>

                <div className="flex flex-col items-start p-6 rounded-xl bg-cyan-300">
                    <div className="text-white p-2 rounded-lg bg-cyan-200 mb-4">
                        <Store size={20} />
                    </div>
                    <h3 className="text-heading-sm text-gray-100 mb-2">Venda de qualquer loja</h3>
                    <p className="text-body-sm text-gray-200">Não importa a loja, o Site.Set permite que você insira qualquer link de afiliado.</p>
                </div>

                <div className="flex flex-col items-start p-6 rounded-xl bg-blue-400">
                    <div className="text-white p-2 rounded-lg bg-blue-300 mb-4">
                        <HeartHandshake size={20} />
                    </div>
                    <h3 className="text-heading-sm text-gray-100 mb-2">Receba suporte amigável</h3>
                    <p className="text-body-sm text-gray-200">Nossa equipe estará sempre pronta para te atender para ajudar no que for preciso.</p>
                </div>
            </div>
            </div>
        </section>
    )
}