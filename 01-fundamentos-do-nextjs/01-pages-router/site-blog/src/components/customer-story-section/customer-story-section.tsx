import Image from "next/image";

interface CustomerStory {
  content: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
}

const customerStories: CustomerStory[] = [
  {
    content:
      "Criar minha loja com o site.set foi a melhor decisão para o meu negócio. A plataforma é super intuitiva, e consegui colocar meus produtos à venda em poucos minutos.",
    author: {
      name: "Annette Bones",
      role: "CEO na Anne Corp",
      image: "/customer-1.png",
    },
  },
  {
    content:
      "Transformar minha ideia em uma loja online foi fácil e rápido. Adorei as opções de personalização e a simplicidade para gerenciar os pedidos. Já vejo meus produtos alcançando mais pessoas!",
    author: {
      name: "Jacob Jones",
      role: "CEO na JJ Org",
      image: "/customer-2.png",
    },
  },
];

export function CustomerStorySection() {
  return (
    <section className="container py-20 md:pt-32 md:pb-[10.5rem]">
      <div className="flex flex-col items-center gap-12">
        <h2 className="font-sans text-gray-100 text-heading-xl">
          Quem utiliza, aprova!
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {customerStories.map((customer) => (
            <div
              key={customer.author.name}
              className="flex flex-col gap-8 rounded-lg bg-gray-600 p-6 md:p-10 border border-gray-400"
            >
              <p className="text-balance text-gray-200 text-body-md italic ">
                {customer.content}
              </p>

              <div className="flex gap-3 items-center">
                <div className="relative h-9 w-9 overflow-hidden rounded-full">
                  <Image
                    src={customer.author.image}
                    alt=""
                    fill
                    className="object-fit"
                  />
                </div>
                <div className="flex flex-col">
                  <strong className="text-gray-200 text-sm">
                    {customer.author.name}
                  </strong>
                  <span className="text-gray-300 text-xs">
                    {customer.author.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
