import Image from "next/image";

export function CustomerStorySection() {

    const customerStories = [
        {
            content:
                'Criar minha loja com o site.set foi a melhor decisão para o meu negócio. A plataforma é super intuitiva, e consegui colocar meus produtos à venda em poucos minutos.',
            author: {
                name: 'Annete Bones',
                role: 'CEO na Anne Corp',
                avatar: '/customer-01.png',
            },
        },
        {
            content:
                'Transformar minha ideia em uma loja online foi fácil e rápido. Adorei as opções de personalização e a simplicidade para gerenciar os pedidos. Já vejo meus produtos alcançando mais pessoas!',
            author: {
                name: 'Jacob Jones',
                role: 'CEO na JJ Corp',
                avatar: '/customer-02.png',
            },
        }
    ];

    return (
        <section className="container py-20 md:py-32 flex flex-col items-center gap-8 md:gap-12">
            <h2 className="text-gray-100 text-heading-md md:text-heading-xl">Quem utiliza, aprova!</h2>

            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                {customerStories.map(story => (
                    <div key={story.author.name} className="p-6 md:p-10 rounded-xl bg-gray-600 border border-gray-400 flex flex-col gap-8 md:gap-10 justify-between">
                        <p className="text-body-md text-gray-200 italic">{story.content}</p>

                        <div className="flex gap-3 items-center">
                            <Image src={story.author.avatar} alt={story.author.name} width={36} height={36} />

                            <div className="flex flex-col gap-1">
                                <span className="text-gray-200 text-body-sm">{story.author.name}</span>
                                <span className="text-gray-300 text-body-xs">{story.author.role}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}